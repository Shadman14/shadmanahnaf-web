import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { industrySlugs } from "@/lib/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "",
    "/services",
    "/work",
    "/pricing",
    "/about",
    "/contact",
    ...industrySlugs.map((s) => `/${s}`),
    "/privacy",
    "/terms",
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.endsWith("-website") ? 0.8 : 0.6,
  }));
}
