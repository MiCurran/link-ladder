import Head from 'next/head'; 
import { NextSeo } from 'next-seo';

export const CustomHead = ({title, description, user}) => {
  const TITLE = `${user}'s Links`;
    return (
      <>
          <Head>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <NextSeo
      title={title}
      description={description}
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: TITLE,
        description: "Link Ladder - All of your content creation links in one customizable snd SEO friendly location",
        images: [
          {
            url: 'https://pbs.twimg.com/profile_banners/1538993801003270144/1655842042/1500x500',
            width: 1200,
            height: 600,
            alt: 'Og Image Alt test',
            type: 'image/jpeg',
          },
        ],
        site_name: 'SiteName',
      }}
      twitter={{
        handle: '@micurran_dev',
        site: '@link-ladder',
        cardType: 'summary_large_image',
      }}
    />
      </>
    )
};