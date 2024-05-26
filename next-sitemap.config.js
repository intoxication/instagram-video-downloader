// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.ajaxwith.com",
  generateRobotsTxt: true,
  exclude: ["/sitemap.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.ajaxwith.com/sitemap.xml", // <==== Add here
    ],
  },
};
