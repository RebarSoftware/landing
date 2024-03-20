import { BaseLayout } from 'components/base';
import PasswordPromptDialog from 'components/dialogs/password';
import { cookies } from 'next/headers';

export default function Deck() {
  const cookiesStore = cookies();
  const loginCookies = cookiesStore.get(process.env.PASSWORD_COOKIE_NAME ?? '');
  const isLoggedIn = !!loginCookies?.value;

  if (!isLoggedIn) return <PasswordPromptDialog />;
  return (
    <BaseLayout>
      <div className="h-screen w-screen flex items-center justify-center flex-col gap-6 pt-[56.25%]">
        <iframe
          className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
          src="https://onedrive.live.com/embed?resid=D2E9AA3742F23AE7%21109&amp;authkey=!AK9lvJpmIgY1Eek&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=0"
          frameBorder="0"
        />
      </div>
    </BaseLayout>
  );
}
