import NextHeadSeo from "next-head-seo";
import type { FC } from "react";

export type PageSeoProps = {
  path: string;
  subtitle?: string;
  description?: string;
  ogImagePath?: string;
};

export const PageSeo: FC<PageSeoProps> = ({
  path,
  subtitle,
  description = "yamoのポートフォリオサイト",
  ogImagePath = "/images/ogp.jpg",
}) => {
  const title = subtitle ? `yamo's portfolio | ${subtitle}` : "yamo's portfolio";
  const APP_ROOT_URL = process.env.NEXT_PUBLIC_SITE_DOMAIN;
  const pageUrl = APP_ROOT_URL + path;
  const ogImageUrl = APP_ROOT_URL + ogImagePath;

  console.log({
    domain: process.env.NEXT_PUBLIC_SITE_DOMAIN,
    ogImagePath,
    ogImageUrl,
    pageUrl,
  });
  return (
    <NextHeadSeo
      title={title}
      canonical={pageUrl}
      description={description}
      og={{
        title,
        description,
        url: pageUrl,
        image: ogImageUrl,
        type: "website",
        siteName: title,
      }}
      twitter={{
        card: "summary",
      }}
    />
  );
};
