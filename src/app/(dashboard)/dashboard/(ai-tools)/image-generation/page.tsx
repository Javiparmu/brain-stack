'use client';

import ImageAmountSelect from '@/app/components/dashboard/image-amount-select';
import ImageList from '@/app/components/dashboard/image-list';
import ResolutionSelect from '@/app/components/dashboard/resolution-select';
import SendButton from '@/app/components/dashboard/send-button';
import { ImageIcon } from '@/app/components/icons';
import LoadingDots from '@/app/components/ui/loading-dots';
import { useFetch } from '@/app/hooks/use-fetch';
import { useMultilineInput } from '@/app/hooks/use-mutiline-input';
import { errorToast } from '@/app/lib/toasts';
import styles from '@/app/styles/Dashboard.module.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FC, useCallback, useState } from 'react';
import { Toaster } from 'sonner';

const ImageGenerationPage: FC = () => {
  const router = useRouter();
  const session = useSession();
  const fetchApi = useFetch<{ url: string }[]>();
  const { inputRef, hasText, handleInput, handleEnter } = useMultilineInput({
    onEnter: (value) => onSubmit({ prompt: value, amount, resolution }),
  });

  const [images, setImages] = useState<string[]>([]);
  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [amount, setAmount] = useState<number>(1);
  const [resolution, setResolution] = useState<string>('256x256');
  const [loadingResponse, setLoadingResponse] = useState<boolean>(false);

  const userId = session.data?.user?.userId;

  const onSubmit = useCallback(
    async ({ prompt, amount, resolution }: { prompt: string; amount: number; resolution: string }) => {
      setLoadingResponse(true);

      await fetchApi('/image', {
        body: {
          prompt,
          amount,
          resolution,
          userId,
        },
        onSuccess: (data) => setImages(data.map((image) => image.url)),
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
        <ImageIcon styles={`${styles.imgIcon} ${styles.icon}`} size={25} color="#e54e4e" />
        <h1>Image Generation</h1>
      </header>
      <section className={styles.sectionSubtitle}>
        <h2>Turn your prompt into an original image.</h2>
      </section>
      <section className={styles.inputContainer}>
        <textarea
          ref={inputRef}
          spellCheck={false}
          onKeyDown={handleEnter}
          onInput={handleInput}
          onChange={(e) => setInputPrompt(e.target.value)}
          value={inputPrompt}
          placeholder="A sandcastle with a beautiful sunset"
          rows={1}
          className={styles.conversationInput + ' ' + styles.imageInput}
        />
        {loadingResponse ? (
          <LoadingDots />
        ) : (
          <SendButton disabled={!hasText} onClick={() => onSubmit({ prompt: inputPrompt, amount, resolution })} />
        )}
      </section>
      <ImageAmountSelect value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />
      <ResolutionSelect value={resolution} onChange={(e) => setResolution(e.target.value)} />
      {images.length > 0 && (
        <section className={styles.imagesContainer}>
          <ImageList images={images} size={256} />
        </section>
      )}
      <Toaster />
    </>
  );
};

export default ImageGenerationPage;
