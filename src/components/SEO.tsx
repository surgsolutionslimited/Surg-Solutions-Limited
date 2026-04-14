import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export default function SEO({ title, description, canonical, ogImage, schema }: SEOProps) {
  const fullTitle = `${title} | Surg Solutions`;
  const defaultImage = 'https://surgsolutions.com/src/assets/logo-dark.png'; // Update with an absolute URL to your actual social share image
  const siteUrl = 'https://surgsolutions.com';
  const url = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const image = ogImage || defaultImage;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />

      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
