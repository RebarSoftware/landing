import { Metadata } from 'next';

const title = 'Rebar Bitcoin RPC';
const description =
  'Providing users and searchers an alternative to the Bitcoin mempool, enabling private transactions and bundles.';

export const sharedMetadata: Metadata = {
  metadataBase: new URL('https://rebar.network/'),
  title,
  description,
  applicationName: title,
  authors: [{ name: title }],
  openGraph: {
    title,
    description,
    images: [
      {
        url: 'android-chrome-512x512.png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    site: '@rebarbtc',
    title,
    description,
    images: [{ url: 'android-chrome-512x512.png' }],
  },
  keywords: ['bitcoin', 'btc', 'rpc', 'bitcoin rpc', 'mev'],
};
