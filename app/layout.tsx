import { Courier_Prime } from 'next/font/google';
import { Providers } from './providers';
import '../styles/globals.css';
import { sharedMetadata } from 'utils/metadata';

const courier = Courier_Prime({ subsets: ['latin'], weight: '400' });

export const metadata = sharedMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${courier.className} h-screen w-screen text-white bg-gradient-to-br from-neutral-950 via-stone-900 to-zinc-950`}
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
