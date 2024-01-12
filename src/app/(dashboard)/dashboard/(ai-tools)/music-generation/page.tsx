'use client';

import { MusicIcon, RobotIcon } from '@/app/components/icons';
import styles from '@/app/styles/Dashboard.module.css';
import { useState } from 'react';
import { Toaster } from 'sonner';
import { useRouter } from 'next/navigation';
import { errorToast } from '@/app/lib/toasts';
import { useSession } from 'next-auth/react';
import { useFetch } from '@/app/hooks/use-fetch';
import MultilineInput from '@/app/components/ui/multiline-input';

const MusicPage = () => {
  const router = useRouter();
  const session = useSession();
  const fetchApi = useFetch<{ audio: string }>();

  const [music, setMusic] = useState<string>();
  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [loadingResponse, setLoadingResponse] = useState<boolean>(false);

  const userId = session.data?.user?.userId;

  const onSubmit = async (prompt: string) => {
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
  };

  return (
    <>
      <header className={styles.sectionTitle}>
        <MusicIcon styles={`${styles.musicIcon} ${styles.icon}`} size={25} color="#dae560" />
        <h1>Music Generation</h1>
      </header>
      <section className={styles.sectionSubtitle}>
        <h2>Turn your prompt into original music.</h2>
      </section>
      <MultilineInput
        value={inputPrompt}
        onChange={(e) => setInputPrompt(e.target.value)}
        onSubmit={() => onSubmit(inputPrompt ?? '')}
        placeholder="A happy song about a dog"
        loading={loadingResponse}
      />
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
