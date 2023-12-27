'use client';

import { MusicIcon, RobotIcon } from '@/app/components/icons';
import styles from '@/app/styles/Dashboard.module.css';
import { FC, useCallback, useState } from 'react';
import { Toaster } from 'sonner';
import { useRouter } from 'next/navigation';
import LoadingDots from '@/app/components/ui/loading-dots';
import { errorToast } from '@/app/lib/toasts';
import { useSession } from 'next-auth/react';
import SendButton from '@/app/components/dashboard/send-button';
import { useFetch } from '@/app/hooks/use-fetch';
import { useMultilineInput } from '@/app/hooks/use-mutiline-input';

const MusicPage: FC = () => {
  const router = useRouter();
  const session = useSession();
  const fetchApi = useFetch<{ audio: string }>();
  const { inputRef, hasText, handleInput, handleEnter } = useMultilineInput({
    onEnter: (value) => onSubmit(value),
  });

  const [music, setMusic] = useState<string>();
  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [loadingResponse, setLoadingResponse] = useState<boolean>(false);

  const userId = session.data?.user?.userId;

  const onSubmit = useCallback(
    async (prompt: string) => {
      setLoadingResponse(true);

      await fetchApi('/music', {
        body: {
          prompt,
          userId,
        },
        onSuccess: (data) => setMusic(data.audio),
        onError: (error) => errorToast(error),
      });

      setLoadingResponse(false);
      router.refresh();
    },
    [fetchApi, router, userId],
  );

  return (
    <>
      <header className={styles.sectionTitle}>
        <MusicIcon styles={`${styles.musicIcon} ${styles.icon}`} size={25} color="#dae560" />
        <h1>Music Generation</h1>
      </header>
      <section className={styles.sectionSubtitle}>
        <h2>Turn your prompt into original music.</h2>
      </section>
      <section className={styles.inputContainer}>
        <textarea
          ref={inputRef}
          spellCheck={false}
          onKeyDown={handleEnter}
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
          <SendButton disabled={!hasText} onClick={() => onSubmit(inputRef.current?.value ?? '')} />
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
          <RobotIcon styles={styles.robotIcon} size={300} color="#6B6C7B" />
        </section>
      )}
      <Toaster />
    </>
  );
};

export default MusicPage;
