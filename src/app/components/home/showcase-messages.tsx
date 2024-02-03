import React, { memo } from 'react';
import AvatarIcon from '../ui/avatar-icon';
import Image from 'next/image';
import styles from '@/app/styles/home/Showcase.module.css';

const ShowcaseMessages = memo(function ShowcaseMessages({ messages, type }: { messages: string[]; type: 'image' | 'conversation' }) {
  return (
    <div className={styles.responses}>
      {messages
        .map((message, index) => {
          const role = index % 2 === 0 ? 'user' : 'bot';
          return type === 'conversation' || role === 'user' ? (
            <div
              key={index}
              style={{ backgroundColor: role === 'user' ? 'var(--dashboard-bg)' : 'var(--dashboard-card)' }}
              className={styles.response}
            >
              <AvatarIcon role={role} className={styles.avatar} />
              <span className={styles.responseText}>{message}</span>
            </div>
          ) : (
            <Image key={index} className={styles.responseImage} src={message} width={130} height={130} alt="AI image generation" />
          );
        })
        .reverse()}
    </div>
  );
});

export default ShowcaseMessages;
