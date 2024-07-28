import { useSession } from 'next-auth/react';
import { signOut, signIn } from 'next-auth/react';

export function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br /> <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
