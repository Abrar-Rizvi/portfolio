/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://m-abrar-portfolio.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/_not-found'],
  additionalPaths: async (config) => {
    // Project IDs from projects.ts
    const projectIds = [1, 2, 3, 4, 5, 6, 7, 8];

    // Generate paths for all project pages
    const projectPaths = projectIds.map((id) => ({
      loc: `/project/${id}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));

    return projectPaths;
  },
}