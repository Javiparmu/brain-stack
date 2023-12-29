'use client';

import { FC, FormEvent } from 'react';
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

const SignIn: FC = () => {
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
      try {
        await signIn('credentials', {
          email,
          password,
          redirect: false,
        });

        toast.success('Signed in successfully');

        router.push('/dashboard');
        router.refresh();
      } catch (error) {
        errorToast('Something went wrong, please try again.');
      }
    } else {
      errorToast('Something went wrong, please try again.');
    }
  };

  return (
    <main className={styles.mainContainer}>
      <header className={styles.logoContainer}>
        <LandingLogo className={styles.logo} />
      </header>
      <div className={styles.bgWrapper}>
        <div className={styles.bgTiles}></div>
      </div>
      <div className={styles.formContainer}>
        <h1 className={styles.authTitle}>Create new account.</h1>
        <form onSubmit={handleSubmit} className={styles.authForm}>
          <div className={styles.emailContainer}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className={styles.emailInput} color="black" required />
          </div>
          <div className={styles.passwordContainer}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className={styles.passwordInput} color="black" required />
          </div>
          <button title="Sign in" type="submit" className={styles.submitButton}>
            Sign in
          </button>
        </form>
        <div className={styles.authDivider} />
        <GoogleSignIn />
        <GithubSignIn />
      </div>
      <Toaster />
    </main>
  );
};

export default SignIn;