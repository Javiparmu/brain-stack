'use client';

import { FormEvent, useEffect, useState } from 'react';
import styles from '@/app/styles/Auth.module.css';
import LandingLogo from '@/app/components/ui/landing-logo';
import GoogleSignIn from '@/app/components/auth/google-sign-in';
import GithubSignIn from '@/app/components/auth/github-sign-in';
import { FormAction, State } from '@/app/state-machines/state';
import FormResult from '@/app/components/auth/form-result';
import { login } from '@/app/actions/login';
import { useMachine } from '@xstate/react';
import formMachine from '@/app/state-machines/form-machine';
import { useSearchParams } from 'next/navigation';

const SignIn = () => {
  const [state, send] = useMachine(formMachine);
  const [message, setMessage] = useState('');

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    send({ type: FormAction.SUBMIT });

    try {
      const data = await login(email, password, callbackUrl);

      if (data?.success) {
        send({ type: FormAction.SUCCESS });
        setMessage(data?.success ?? '');
      }

      if (data?.error) {
        send({ type: FormAction.ERROR });
        setMessage(data.error);
      }
    } catch (error) {
      send({ type: FormAction.ERROR });
      setMessage('Something went wrong.');
    }
  };

  useEffect(() => {
    if (searchParams.get('error') === 'OAuthAccountNotLinked') {
      send({ type: FormAction.ERROR });
      setMessage('Email already in use with different provider!');
    }
  }, [searchParams, send]);

  return (
    <div className={styles.mainContainer}>
      <header className={styles.logoContainer}>
        <LandingLogo className={styles.logo} />
      </header>
      <div className={styles.bgWrapper}>
        <div className={styles.bgTiles}></div>
      </div>
      <article className={styles.formContainer}>
        <h1 className={styles.authTitle}>Sign in to your account.</h1>
        <form onSubmit={handleSubmit} className={styles.authForm}>
          <label className={styles.emailContainer}>
            Email
            <input type="email" id="email" className={styles.emailInput} color="black" required />
          </label>
          <label className={styles.passwordContainer}>
            Password
            <input minLength={8} type="password" id="password" className={styles.passwordInput} color="black" required />
          </label>
          <FormResult state={state.value as State} message={message} />
          <button disabled={state.matches(State.LOADING)} title="Sign in" type="submit" className={styles.submitButton}>
            Sign in
          </button>
        </form>
        <div className={styles.authDivider} />
        <GoogleSignIn />
        <GithubSignIn />
      </article>
    </div>
  );
};

export default SignIn;
