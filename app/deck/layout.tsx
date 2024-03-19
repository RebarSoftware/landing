import { sharedMetadata } from 'utils/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...sharedMetadata,
  title: "Rebar Bitcoin RPC | Deck"
}

export default function DeckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <>{children}</>
  );
}
