'use client';

import SendButton from '@/app/components/dashboard/send-button';
import { RobotIcon, VideoIcon } from '@/app/components/icons';
import LoadingDots from '@/app/components/ui/loading-dots';
import { useFetch } from '@/app/hooks/use-fetch';
import { useMultilineInput } from '@/app/hooks/use-mutiline-input';
import { errorToast } from '@/app/lib/toasts';
import styles from '@/app/styles/Dashboard.module.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FC, useCallback, useState } from 'react';
import { Toaster } from 'sonner';

const VideoPage: FC = () => {
  const router = useRouter();
  const session = useSession();
  const fetchApi = useFetch<string[]>();
  const { inputRef, hasText, handleInput, handleEnter } = useMultilineInput({
    onEnter: (value) => onSubmit(value),
  });

  const [video, setVideo] = useState<string>();
  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [loadingResponse, setLoadingResponse] = useState<boolean>(false);

  const userId = session.data?.user?.userId;

  const onSubmit = useCallback(
    async (prompt: string | null) => {
      setLoadingResponse(true);
      setVideo(undefined);

      await fetchApi('/video', {
        body: {
          prompt,
          userId,
        },
        onSuccess: (data) => setVideo(data[0]),
        onError: (error) => errorToast(error),
      });

      setLoadingResponse(false);
      router.refresh();
    },
    [userId, fetchApi, router],
  );

  return (
    <>
      <header className={styles.sectionTitle}>
        <VideoIcon styles={`${styles.videoIcon} ${styles.icon}`} size={25} color="#eab154" />
        <h1>Video Generation</h1>
      </header>
      <section className={styles.sectionSubtitle}>
        <h2>Turn your prompt into an original video.</h2>
      </section>
      <section className={styles.inputContainer}>
        <textarea
          ref={inputRef}
          spellCheck={false}
          onKeyDown={handleEnter}
          onInput={handleInput}
          onChange={(e) => setInputPrompt(e.target.value)}
          value={inputPrompt}
          placeholder="A family of fishes swimming in the ocean"
          rows={1}
          className={styles.conversationInput}
        />
        {loadingResponse ? <LoadingDots /> : <SendButton disabled={!hasText} onClick={() => onSubmit(inputPrompt)} />}
      </section>
      {video ? (
        <section className={styles.musicContainer}>
          <video controls className={styles.video}>
            <source src={video} />
          </video>
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

export default VideoPage;
