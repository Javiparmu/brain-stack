'use client';

import { useEffect, useState } from 'react';
import styles from '@/app/styles/Auth.module.css';
import { useRouter, useSearchParams } from 'next/navigation';
import LandingLogo from '@/app/components/ui/landing-logo';
import { State } from '@/app/state-machines/state';
import FormResult from '@/app/components/auth/form-result';
import { verifyUser } from '@/app/actions/verify-user';

const SignIn = () => {
  const [state, setState] = useState(State.INITIAL);
  const [message, setMessage] = useState('');

  const searchParams = useSearchParams();
  const router = useRouter();

  const handleVerifyToken = async () => {
    setState(State.LOADING);

    const token = searchParams.get('token');

    if (!token) {
      setState(State.ERROR);
      setMessage('Token not found.');
      return;
    }

    try {
      const data = await verifyUser(token);

      if (data.error) {
        setState(State.ERROR);
        setMessage(data.error);
      }

      if (data.success) {
        setState(State.SUCCESS);
        setMessage(data.success);

        router.push('/auth/signin');
      }
    } catch (error) {
      setState(State.ERROR);
      setMessage('Something went wrong.');
    }
  };

  useEffect(() => {
    handleVerifyToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, router]);

  // TODO: Create layout component
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
          <h1 className={styles.verifyTitle}>Verifying token.</h1>
          <FormResult state={state} message={message} />
        </article>
      </div>
    </>
  );
};

export default SignIn;
