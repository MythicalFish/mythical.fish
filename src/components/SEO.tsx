import React from "react";
import { useSiteMetadata } from "../hooks/metadata";

export const SEO: React.FC = () => {
  const { title, description, image, siteUrl, twitterUsername } =
    useSiteMetadata();

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={twitterUsername} />
    </>
  );
};
