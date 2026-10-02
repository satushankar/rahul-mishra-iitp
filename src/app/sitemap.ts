import type { MetadataRoute } from "next";

const BASE = "https://rahul-mishra-iitp.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/research",
    "/publications",
    "/experience",
    "/achievements",
    "/activities",
    "/contact",
  ];
  const now = new Date();
  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.8,
  }));
}
