import { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { getBlogSource } from "@/lib/blog-source";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const blogSource = getBlogSource();
  
  try {
    const { slug } = await params;

    if (!slug || slug.length === 0) {
      return {
        title: "Blog Not Found",
        description: "The requested blog post could not be found.",
      };
    }

    const page = blogSource.getPage([slug]);

    if (!page) {
      return {
        title: "Blog Not Found",
        description: "The requested blog post could not be found.",
      };
    }

    const pageData = page.data as any;
    const ogUrl = `${siteConfig.url}/blog/${slug}`;
    const ogImage = `${ogUrl}/opengraph-image`;

    return {
      title: pageData.title,
      description: pageData.description,
      keywords: [
        pageData.title,
        ...(pageData.tags || []),
        "Blog",
        "Article",
        "Web Development",
        "Programming",
        "Technology",
        "Software Engineering",
      ],
      authors: [
        {
          name: pageData.author || "Magic UI",
          url: siteConfig.url,
        },
      ],
      creator: pageData.author || "Magic UI",
      publisher: "Magic UI",
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      openGraph: {
        title: pageData.title,
        description: pageData.description,
        type: "article",
        url: ogUrl,
        publishedTime: pageData.date,
        authors: [pageData.author || "Magic UI"],
        tags: pageData.tags,
        images: [
          {
            url: pageData.thumbnail || ogImage,
            width: 1200,
            height: 630,
            alt: pageData.title,
          },
        ],
        siteName: siteConfig.name,
      },
      twitter: {
        card: "summary_large_image",
        title: pageData.title,
        description: pageData.description,
        images: [pageData.thumbnail || ogImage],
        creator: "@dillionverma",
        site: "@dillionverma",
      },
      alternates: {
        canonical: ogUrl,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }
}
