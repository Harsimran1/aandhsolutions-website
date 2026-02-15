import { readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const distDir = join(root, 'dist');
const locales = ['en', 'fr', 'de', 'es'];

function getSlugs(contentDir) {
  return readdirSync(contentDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
    .sort();
}

const checks = [
  {
    name: 'domains',
    slugs: getSlugs(join(root, 'src', 'content', 'domains')),
    toPath: (locale, slug) => join(distDir, locale, 'domains', slug, 'index.html'),
  },
  {
    name: 'case-studies',
    slugs: getSlugs(join(root, 'src', 'content', 'case-studies')),
    toPath: (locale, slug) => join(distDir, locale, 'case-studies', slug, 'index.html'),
  },
  {
    name: 'blog',
    slugs: getSlugs(join(root, 'src', 'content', 'blog')),
    toPath: (locale, slug) => join(distDir, locale, 'blog', slug, 'index.html'),
  },
];

const missing = [];

for (const check of checks) {
  for (const locale of locales) {
    for (const slug of check.slugs) {
      const filePath = check.toPath(locale, slug);
      if (!existsSync(filePath)) {
        missing.push(`${check.name} | ${locale} | ${slug} -> ${filePath}`);
      }
    }
  }
}

console.log('Localized artifact counts:');
for (const check of checks) {
  const expected = check.slugs.length;
  for (const locale of locales) {
    let present = 0;
    for (const slug of check.slugs) {
      if (existsSync(check.toPath(locale, slug))) {
        present += 1;
      }
    }
    console.log(`- ${check.name} | ${locale}: ${present}/${expected}`);
  }
}

if (missing.length > 0) {
  console.error('Missing localized static artifacts:');
  for (const line of missing) {
    console.error(`- ${line}`);
  }
  process.exit(1);
}

console.log('All localized static artifacts are present.');
