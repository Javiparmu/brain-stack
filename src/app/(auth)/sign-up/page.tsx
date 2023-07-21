'use client';

import '@/styles/globals.css';
import { useState, FormEvent, FC } from 'react';
import { useAuthStore } from '@/store/authStore';
import styles from '@/styles/Auth.module.css';
import { AuthImage } from '@/components';

const SignUp: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const { user, registerUser } = useAuthStore();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await registerUser({ username, email, password });

    if (user) {
      window.location.href = '/';
    }
  };

  return (
    <div className={styles.authContainer}>
      <AuthImage />
      <form onSubmit={onSubmit} className={styles.authForm}>
        <h2>Register</h2>
        <div className={styles.inputContainer} id="username">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.authInput}
          />
        </div>
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
          <button type="submit">Login</button>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
