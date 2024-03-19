import { Orbitron } from 'next/font/google';
import { Providers } from './providers';
import '../styles/globals.css';
import { sharedMetadata } from 'utils/metadata';

const revalia = Orbitron({ subsets: ['latin'], weight: '400' });

export const metadata = sharedMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${revalia.className} h-screen w-screen bg-black text-white`}
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
