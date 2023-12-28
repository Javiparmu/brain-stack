'use client';

import { RobotIcon, VideoIcon } from '@/app/components/icons';
import MultilineInput from '@/app/components/ui/multiline-input';
import { useFetch } from '@/app/hooks/use-fetch';
import { errorToast } from '@/app/lib/toasts';
import styles from '@/app/styles/Dashboard.module.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { Toaster } from 'sonner';

const VideoPage: FC = () => {
  const router = useRouter();
  const session = useSession();
  const fetchApi = useFetch<string[]>();

  const [video, setVideo] = useState<string>();
  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [loadingResponse, setLoadingResponse] = useState<boolean>(false);

  const userId = session.data?.user?.userId;

  const onSubmit = async (prompt: string | null) => {
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
  };

  return (
    <>
      <header className={styles.sectionTitle}>
        <VideoIcon styles={`${styles.videoIcon} ${styles.icon}`} size={25} color="#eab154" />
        <h1>Video Generation</h1>
      </header>
      <section className={styles.sectionSubtitle}>
        <h2>Turn your prompt into an original video.</h2>
      </section>
      <MultilineInput
        value={inputPrompt}
        onChange={(e) => setInputPrompt(e.target.value)}
        onSubmit={() => onSubmit(inputPrompt ?? '')}
        placeholder="A family of ducks swimming in a pond"
        loading={loadingResponse}
      />
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
