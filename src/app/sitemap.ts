import type { MetadataRoute } from "next";

const baseUrl = "https://www.govroom.co.uk";

const routes = [
  "",
  "/features",
  "/pricing",
  "/who-its-for",
  "/about",
  "/contact",
  "/resources",
  "/blog",
  "/faq",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
