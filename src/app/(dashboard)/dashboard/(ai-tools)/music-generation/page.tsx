'use client';

import { MusicIcon, RobotIcon, SendIcon } from '@/app/components/icons';
import styles from '@/app/styles/Dashboard.module.css';
import { FC, useEffect, useRef, useState } from 'react';
import { Toaster } from 'sonner';
import { useRouter } from 'next/navigation';
import LoadingDots from '@/app/components/ui/loading-dots';
import { errorToast } from '@/app/lib/toasts';
import { useSession } from 'next-auth/react';

const MusicPage: FC = () => {
  const router = useRouter();
  const [hasText, setHasText] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [music, setMusic] = useState<string>();
  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [loadingResponse, setLoadingResponse] = useState<boolean>(false);
  const session = useSession();

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

      setHasText(textareaRef.current.value.trim() !== '');
    }
  };

  const onSubmit = async (prompt: string) => {
    setLoadingResponse(true);

    const userId = session.data?.user?.userId;

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/music', {
      method: 'POST',
      body: JSON.stringify({
        prompt,
        userId,
      }),
    });

    if (response.ok) {
      const audioResponse = await response.json();
      setMusic(audioResponse?.audio);
    } else {
      const { error } = await response.json();
      errorToast(error);
    }

    setLoadingResponse(false);
    router.refresh();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();

      if (textareaRef.current?.value !== '') {
        onSubmit(textareaRef.current?.value || '');
      }
    }
  };

  useEffect(() => {
    handleInput();
  }, []);

  return (
    <>
      <header className={styles.sectionTitle}>
        <MusicIcon styles={styles.musicIcon} size={25} color="#dae560" />
        <h1>Music Generation</h1>
      </header>
      <section className={styles.sectionSubtitle}>
        <h2>Turn your prompt into original music.</h2>
      </section>
      <section className={styles.inputContainer}>
        <textarea
          ref={textareaRef}
          spellCheck={false}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          onChange={(e) => setInputPrompt(e.target.value)}
          value={inputPrompt}
          placeholder="A happy song about a dog"
          rows={1}
          className={styles.conversationInput}
        />
        {loadingResponse ? (
          <LoadingDots />
        ) : (
          <button
            disabled={!hasText}
            className={`${styles.sendIcon} ${hasText ? styles.active : ''}`}
            onClick={() => onSubmit(textareaRef.current?.value || '')}
          >
            <SendIcon size={25} color="#6B6C7B" />
          </button>
        )}
      </section>
      {music ? (
        <section className={styles.musicContainer}>
          <audio controls className={styles.audioPlayer}>
            <source src={music} />
          </audio>
        </section>
      ) : (
        <section className={styles.noConvContainer}>
          <RobotIcon size={300} color="#6B6C7B" />
        </section>
      )}
      <Toaster />
    </>
  );
};

export default MusicPage;
