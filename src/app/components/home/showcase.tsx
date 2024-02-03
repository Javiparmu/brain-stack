'use client';

import styles from '@/app/styles/home/Showcase.module.css';
import { useShowcase } from '@/app/hooks/use-showcase';
import ShowcaseMessages from './showcase-messages';
import ShowcaseSendButton from './showcase-send-button';

const Showcase = ({ type }: { type: 'conversation' | 'image' }) => {
  const { prompt, responses, loading } = useShowcase(type);

  return (
    <article className={styles.showcaseContainer}>
      <p
        style={{
          textDecorationLine: 'underline',
          textDecorationColor: 'var(--secondary)',
          textUnderlineOffset: '10px',
          textDecorationThickness: '2px',
        }}
        className={styles.showcaseText}
      >
        {type === 'conversation' ? 'You can have a conversation.' : 'You can generate your own images.'}
      </p>
      <div className={styles.showcase}>
        <div className={styles.typingAnimation}>
          {prompt}
          <ShowcaseSendButton loading={loading} />
        </div>
        <ShowcaseMessages messages={responses} type={type} />
      </div>
    </article>
  );
};

export default Showcase;
