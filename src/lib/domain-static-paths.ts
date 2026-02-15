import { getCollection } from 'astro:content';

export async function getDomainStaticPaths() {
  const domains = await getCollection('domains');
  return domains.map((domain) => ({
    params: { slug: domain.slug },
    props: { domain },
  }));
}
