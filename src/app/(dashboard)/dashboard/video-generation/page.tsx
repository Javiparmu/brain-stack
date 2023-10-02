'use client';

import ImageList from '@/app/components/dashboard/image-list';
import {
  ImageIcon,
  RobotIcon,
  SendIcon,
  VideoIcon,
} from '@/app/components/icons';
import LoadingDots from '@/app/components/ui/loading-dots';
import styles from '@/styles/Dashboard.module.css';
import { exampleImages } from '@/utils';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

interface ImageGenerationOptions {
  prompt: string;
  amount: number;
  resolution: string;
}

const VideoPage: FC = () => {
  const router = useRouter();
  const [hasText, setHasText] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [video, setVideo] = useState<string>();
  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [amount, setAmount] = useState<number>(1);
  const [resolution, setResolution] = useState<string>('256x256');
  const [loadingResponse, setLoadingResponse] = useState<boolean>(false);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

      setHasText(textareaRef.current.value.trim() !== '');
    }
  };

  const onSubmit = async (prompt: string | null) => {
    try {
      setLoadingResponse(true);

      setVideo(undefined);

      const response = await axios.post('/api/video', {
        prompt,
      });

      setVideo(response.data[0]);

      setLoadingResponse(false);
    } catch (error: any) {
      if (error?.response?.status !== 403) {
        toast.error('Something went wrong.');
      }
    } finally {
      router.refresh();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();

      if (textareaRef.current?.value !== '') {
        onSubmit(textareaRef.current?.value ?? null);
      }
    }
  };

  useEffect(() => {
    handleInput();
  }, []);

  return (
    <>
      <header className={styles.sectionTitle}>
        <VideoIcon styles={styles.videoIcon} size={25} color="#eab154" />
        <h1>Video Generation</h1>
      </header>
      <section className={styles.sectionSubtitle}>
        <h2>Turn your prompt into an original video.</h2>
      </section>
      <section className={styles.inputContainer}>
        <textarea
          ref={textareaRef}
          spellCheck={false}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          onChange={(e) => setInputPrompt(e.target.value)}
          value={inputPrompt}
          placeholder="A family of fishes swimming in the ocean"
          rows={1}
          className={styles.conversationInput}
        />
        {loadingResponse ? (
          <LoadingDots />
        ) : (
          <button
            disabled={!hasText}
            className={`${styles.sendIcon} ${hasText ? styles.active : ''}`}
            onClick={() => onSubmit(inputPrompt)}
          >
            <SendIcon size={25} color="#6B6C7B" />
          </button>
        )}
      </section>
      {video ? (
        <section className={styles.musicContainer}>
          <video controls className={styles.video}>
            <source src={video} />
          </video>
        </section>
      ) : (
        <section className={styles.noConvContainer}>
          <RobotIcon size={300} color="#6B6C7B" />
        </section>
      )}
    </>
  );
};

export default VideoPage;
