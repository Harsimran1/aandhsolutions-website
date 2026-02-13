#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Helper function to convert HTML to Markdown
function htmlToMarkdown(html) {
  if (!html) return '';
  
  // Simple HTML to Markdown conversion
  // For a more robust conversion, consider using a library like turndown
  let markdown = html
    // Headers
    .replace(/<h1[^>]*>(.*?)<\/h1>/g, '# $1')
    .replace(/<h2[^>]*>(.*?)<\/h2>/g, '## $1')
    .replace(/<h3[^>]*>(.*?)<\/h3>/g, '### $1')
    .replace(/<h4[^>]*>(.*?)<\/h4>/g, '#### $1')
    .replace(/<h5[^>]*>(.*?)<\/h5>/g, '##### $1')
    .replace(/<h6[^>]*>(.*?)<\/h6>/g, '###### $1')
    
    // Paragraphs
    .replace(/<p[^>]*>/g, '')
    .replace(/<\/p>/g, '\n\n')
    
    // Strong/Bold
    .replace(/<(strong|b)[^>]*>(.*?)<\/(strong|b)>/g, '**$2**')
    
    // Emphasis/Italic
    .replace(/<(em|i)[^>]*>(.*?)<\/(em|i)>/g, '*$2*')
    
    // Links
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/g, '[$2]($1)')
    
    // Images (skip Ghost placeholder URLs)
    .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/g, (match, src, alt) => {
      return src.includes('__GHOST_URL__') ? '' : `![${alt}](${src})`;
    })
    .replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/g, (match, src) => {
      return src.includes('__GHOST_URL__') ? '' : `![](${src})`;
    })
    
    // Lists
    .replace(/<ul[^>]*>/g, '')
    .replace(/<\/ul>/g, '\n')
    .replace(/<ol[^>]*>/g, '')
    .replace(/<\/ol>/g, '\n')
    .replace(/<li[^>]*>(.*?)<\/li>/g, '- $1\n')
    
    // Code
    .replace(/<code[^>]*>(.*?)<\/code>/g, '`$1`')
    .replace(/<pre[^>]*><code[^>]*>(.*?)<\/code><\/pre>/gs, '```\n$1\n```')
    
    // Blockquotes
    .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gs, (match, content) => {
      return content.split('\n').map(line => `> ${line.trim()}`).join('\n');
    })
    
    // Break tags
    .replace(/<br\s*\/?>/g, '\n')
    
    // Remove remaining HTML tags
    .replace(/<[^>]+>/g, '')
    
    // Clean up extra whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .trim();
    
  return markdown;
}

// Helper function to create slug from title
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Helper function to format date for frontmatter
function formatDate(dateString) {
  return new Date(dateString).toISOString().split('T')[0];
}

// Main migration function
async function migratePosts() {
  try {
    // Read and parse posts.json
    console.log('Reading posts.json...');
    const postsData = JSON.parse(fs.readFileSync('posts.json', 'utf8'));
    
    // Filter for actual blog posts (not pages)
    const blogPosts = postsData.filter(post => post.type === 'post' && post.status === 'published');
    
    console.log(`Found ${blogPosts.length} published blog posts to migrate`);
    
    // Ensure blog directory exists
    const blogDir = path.join('src', 'content', 'blog');
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true });
      console.log('Created src/content/blog directory');
    }
    
    // Process each blog post
    for (const post of blogPosts) {
      console.log(`Processing: ${post.title}`);
      
      // Create filename from slug or title
      const slug = post.slug || createSlug(post.title);
      const filename = `${slug}.md`;
      const filepath = path.join(blogDir, filename);
      
      // Extract and convert content
      let content = '';
      if (post.html) {
        content = htmlToMarkdown(post.html);
      } else if (post.mobiledoc) {
        // Ghost uses mobiledoc format - try to extract text
        try {
          const mobiledoc = JSON.parse(post.mobiledoc);
          if (mobiledoc.cards) {
            content = mobiledoc.cards.map(card => {
              if (card[0] === 'html' && card[1] && card[1].html) {
                return htmlToMarkdown(card[1].html);
              }
              return '';
            }).join('\n\n');
          }
        } catch (e) {
          console.warn(`Could not parse mobiledoc for post: ${post.title}`);
        }
      }
      
      // Extract tags
      const tags = post.tags ? post.tags.map(tag => tag.name || tag).filter(Boolean) : [];
      
      // Create frontmatter
      const frontmatter = {
        title: post.title,
        description: post.meta_description || post.excerpt || '',
        publishedAt: formatDate(post.published_at || post.created_at),
        ...(post.updated_at && { updatedAt: formatDate(post.updated_at) }),
        author: {
          name: post.author ? (post.author.name || 'A&H Solutions Team') : 'A&H Solutions Team',
          email: post.author && post.author.email ? post.author.email : 'team@aandhsolutions.com',
          ...(post.author && post.author.profile_image && { avatar: post.author.profile_image })
        },
        ...(post.feature_image && !post.feature_image.includes('__GHOST_URL__') && { 
          image: post.feature_image,
          imageAlt: post.feature_image_alt || post.title
        }),
        tags: tags.length > 0 ? tags : ['general'],
        draft: false
      };
      
      // Create markdown file content
      const markdownContent = `---
${Object.entries(frontmatter).map(([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    return `${key}:\n${Object.entries(value).map(([k, v]) => `  ${k}: ${JSON.stringify(v)}`).join('\n')}`;
  } else if (Array.isArray(value)) {
    return `${key}:\n${value.map(item => `  - ${JSON.stringify(item)}`).join('\n')}`;
  } else {
    return `${key}: ${JSON.stringify(value)}`;
  }
}).join('\n')}
---

${content}
`;
      
      // Write the file
      fs.writeFileSync(filepath, markdownContent);
      console.log(`✓ Created: ${filename}`);
    }
    
    console.log(`\n✅ Migration completed! Created ${blogPosts.length} blog post files.`);
    console.log(`📁 Files location: ${blogDir}`);
    
    // Summary statistics
    const allPosts = postsData.length;
    const pages = postsData.filter(post => post.type === 'page').length;
    const drafts = postsData.filter(post => post.status !== 'published').length;
    
    console.log('\n📊 Migration Summary:');
    console.log(`   Total items in posts.json: ${allPosts}`);
    console.log(`   Published blog posts: ${blogPosts.length}`);
    console.log(`   Pages (skipped): ${pages}`);
    console.log(`   Drafts/unpublished (skipped): ${drafts}`);
    
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  }
}

// Run migration
if (require.main === module) {
  migratePosts();
}

module.exports = { migratePosts };