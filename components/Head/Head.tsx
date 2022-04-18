import HeadTag from 'next/head';

import usePermalink from 'Hooks/usePermalink';

import siteName from 'SiteName';
import siteUrl from 'SiteUrl';
import slogan from 'Slogan';
import addressSeparator from 'AddressSeparator';

import myPhoto from 'Images/banners/me.jpg';
import getISOStringFromPublicationDate from 'Helpers/functions/getISOStringFromPublicationDate';

type Schema = {
  '@context': string;
  '@graph': {
    '@type': string[];
    '@id': string;
    name: string;
    sameAs?: string[];
    image?: {
      '@type': string;
      '@id': string;
      inLanguage: string;
      url: string;
      width: number;
      height: number;
      caption: string;
    };
    description?: string;
    url?: string;
    logo?: {
      '@id': string;
    };
    publisher?: {
      '@id': string;
    };
    inLanguage?: string;
    datePublished?: string;
  }[];
};

type Props = { title: string; description: string; featuredImage: string } & (
  | {
      contentType: 'website';
    }
  | {
      contentType: 'article';
      publicationDate: string;
    }
);

const Head = (props: Props) => {
  const permalink = usePermalink();

  const robotsMeta = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

  const schema: Schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Person', 'Organization'],
        '@id': `${siteUrl}/#person`,
        name: siteName,
        sameAs: [
          'https://www.facebook.com/robertorlinski.blog/',
          'https://www.facebook.com/robert.orlinski.92/',
          'https://www.instagram.com/robert.orlinski/',
          'https://www.linkedin.com/in/robert-orlinski/',
          'https://www.youtube.com/channel/UC_qgM2UztycBZGQLNaGs9Jg/',
          'https://twitter.com/robert_orlinski/',
        ],
        image: {
          '@type': 'ImageObject',
          '@id': `${siteUrl}/#logo`,
          inLanguage: 'pl-PL',
          url: myPhoto.src,
          width: 1800,
          height: 1200,
          caption: siteName,
        },
        logo: {
          '@id': `${siteUrl}/#logo`,
        },
      },
      {
        '@type': ['WebSite'],
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: siteName,
        description: slogan,
        publisher: {
          '@id': `${siteUrl}/#person`,
        },
        inLanguage: 'pl-PL',
      },
    ],
  };

  if (props.contentType === 'article') {
    schema['@graph'].push({
      '@type': ['Article'],
      '@id': `${permalink}/article`,
      url: permalink,
      name: props.title,
      description: props.description,
      image: {
        '@type': 'ImageObject',
        '@id': `${permalink}#image`,
        url: props.featuredImage,
        inLanguage: 'pl-PL',
        width: 1650,
        height: 1000,
        caption: siteName,
      },
      datePublished: getISOStringFromPublicationDate(props.publicationDate),
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
    });
  }

  return (
    <HeadTag>
      <title>{props.title}</title>
      <meta key="description" name="description" content={props.description} />

      <meta key="robots" name="robots" content={robotsMeta} />
      <meta key="googlebot" name="googlebot" content={robotsMeta} />
      <meta key="bingbot" name="bingbot" content={robotsMeta} />

      <link key="profile" rel="profile" href="https://gmpg.org/xfn/11" />
      <link key="canonical" rel="canonical" href={permalink} />

      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />

      <meta property="og:url" content={permalink} />
      <meta property="og:site_name" content={siteName} />

      <meta property="og:locale" content="pl_PL" />
      <meta property="og:type" content={props.contentType} />

      {props.contentType === 'article' && (
        <>
          <meta property="article:author" content="https://www.linkedin.com/in/robert-orlinski/" />
          <meta
            property="article:publisher"
            content="https://www.facebook.com/robertorlinski.blog/"
          />
          <meta
            property="article:published_time"
            content={getISOStringFromPublicationDate(props.publicationDate)}
          />
        </>
      )}

      <link rel="index" title="Strona główna" href={siteUrl} />

      <meta property="og:image" content={props.featuredImage} />
      <meta property="og:image:width" content="1300" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />

      <meta name="twitter:image" content={props.featuredImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@robert_orlinski" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2979ff" />

      <meta name="msapplication-TileColor" content="#2979ff" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>

      <link
        rel="alternate"
        type="application/rss+xml"
        title={`${siteName} ${addressSeparator} Kanał z artykułami`}
        href={`${siteUrl}/rss.xml`}
      />
    </HeadTag>
  );
};

export default Head;
