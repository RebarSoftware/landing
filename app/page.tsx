import { BaseLayout } from 'components/base';
import Image from 'next/image';

export default function Home() {
  return (
    <BaseLayout>
      <div className="h-screen w-screen flex items-center justify-center flex-col gap-6">
        <Image 
          src="/images/logo.jpeg"
          alt="Rebar Bitcoin RPC Logo"
          width={120}
          height={120}
        />
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">Rebar</h1>
        <h2 className="text-neutral-500 text-lg"> Bitcoin RPC</h2>
        </div>
        <div>
          <h3></h3>
        </div>
        <div>
          <h4>Coming soon</h4>
        </div>
      </div>
    </BaseLayout>
  );
}
