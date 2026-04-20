import type { MetadataRoute } from "next";
import { MOCK_TOURS } from "@/lib/mock-data";

const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://onceuponatimeinporto.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const tourPages: MetadataRoute.Sitemap = MOCK_TOURS.map((tour) => ({
    url: `${BASE_URL}/tours/${tour.slug}`,
    lastModified: new Date(tour.created_at),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/tours`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/reviews`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...tourPages,
  ];
}
