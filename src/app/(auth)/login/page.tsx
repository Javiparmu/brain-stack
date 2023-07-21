'use client';

import '@/styles/globals.css';
import { useState, useEffect, FormEvent, FC } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/Auth.module.css';
import { useAuthStore } from '@/store/authStore';
import { AuthImage } from '@/components';

const Login: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const { push } = useRouter();
  const { user, loginUser } = useAuthStore();

  useEffect(() => {
    if (user) {
      push('/');
    }
  }, [user]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await loginUser(email, password);
  };

  return (
    <div className={styles.authContainer}>
      <AuthImage />
      <form onSubmit={onSubmit} className={styles.authForm}>
        <h2>Login</h2>
        <div className={styles.inputContainer} id="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.authInput}
          />
        </div>
        <div className={styles.inputContainer} id="password">
          <label htmlFor="password">Password</label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.authInput}
          />
          <span
            className={styles.visibilityButton}
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? 'Hide' : 'Show'}
          </span>
        </div>
        <div className={styles.buttonsContainer}>
          <button type="button">Register</button>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
