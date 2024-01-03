'use client';

import { FC, FormEvent, useEffect } from 'react';
import styles from '@/app/styles/Auth.module.css';
import { signIn } from 'next-auth/react';
import { Toaster, toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { useFetch } from '@/app/hooks/use-fetch';
import { errorToast } from '@/app/lib/toasts';
import LandingLogo from '@/app/components/ui/landing-logo';
import GoogleSignIn from '@/app/components/auth/google-sign-in';
import GithubSignIn from '@/app/components/auth/github-sign-in';

interface SignIn {
  email: string;
  password: string;
}

interface SignInProps {
  searchParams: {
    error: string;
  };
}

const SignIn: FC<SignInProps> = ({ searchParams }) => {
  const router = useRouter();
  const fetchApi = useFetch<SignIn>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId = uuidv4();
    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    const response = await fetchApi('/auth/signup', {
      body: { userId, email, password },
    });

    if (response.ok) {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      toast.success('Signed in successfully');

      router.push('/dashboard');
      router.refresh();
    } else {
      errorToast('Something went wrong, please try again.');
    }
  };

  useEffect(() => {
    if (searchParams?.error) {
      errorToast(searchParams.error);
    }
  }, [searchParams]);

  return (
    <>
      <div className={styles.mainContainer}>
        <header className={styles.logoContainer}>
          <LandingLogo className={styles.logo} />
        </header>
        <div className={styles.bgWrapper}>
          <div className={styles.bgTiles}></div>
        </div>
        <article className={styles.formContainer}>
          <h1 className={styles.authTitle}>Create new account.</h1>
          <form onSubmit={handleSubmit} className={styles.authForm}>
            <label className={styles.emailContainer}>
              Email
              <input type="email" id="email" className={styles.emailInput} color="black" required />
            </label>
            <label className={styles.passwordContainer}>
              Password
              <input
                minLength={8}
                type="password"
                id="password"
                className={styles.passwordInput}
                color="black"
                required
              />
            </label>
            <button title="Sign in" type="submit" className={styles.submitButton}>
              Sign in
            </button>
          </form>
          <div className={styles.authDivider} />
          <GoogleSignIn />
          <GithubSignIn />
        </article>
      </div>
      <Toaster />
    </>
  );
};

export default SignIn;
