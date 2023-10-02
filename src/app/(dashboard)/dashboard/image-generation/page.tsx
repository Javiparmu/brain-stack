'use client';

import ImageList from '@/app/components/dashboard/image-list';
import { ImageIcon, SendIcon } from '@/app/components/icons';
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

const ImageGenerationPage: FC = () => {
  const router = useRouter();
  const [hasText, setHasText] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [images, setImages] = useState<string[]>([]);
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

  const onSubmit = async ({
    prompt,
    amount,
    resolution,
  }: ImageGenerationOptions) => {
    try {
      setLoadingResponse(true);

      console.log('values', prompt, amount, resolution);

      const response = await axios.post('/api/image', {
        prompt,
        amount,
        resolution,
      });

      console.log('response', response);

      const urls = response.data.map((image: { url: string }) => image.url);

      console.log('urls', urls);

      setImages(urls);

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
        const options = {
          prompt: textareaRef.current?.value || '',
          amount,
          resolution,
        };

        onSubmit(options);
      }
    }
  };

  useEffect(() => {
    handleInput();
  }, []);

  return (
    <>
      <header className={styles.sectionTitle}>
        <ImageIcon styles={styles.imgIcon} size={25} color="#e54e4e" />
        <h1>Image Generation</h1>
      </header>
      <section className={styles.sectionSubtitle}>
        <h2>Turn your prompt into an original image.</h2>
      </section>
      <section className={styles.inputContainer}>
        <textarea
          ref={textareaRef}
          spellCheck={false}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          onChange={(e) => setInputPrompt(e.target.value)}
          value={inputPrompt}
          placeholder="A sandcastle on the beach with a beautiful sunset"
          rows={1}
          className={styles.conversationInput + ' ' + styles.imageInput}
        />
        {loadingResponse ? (
          <LoadingDots />
        ) : (
          <button
            disabled={!hasText}
            className={`${styles.sendIcon} ${hasText ? styles.active : ''}`}
            onClick={() =>
              onSubmit({ prompt: inputPrompt, amount, resolution })
            }
          >
            <SendIcon size={25} color="#6B6C7B" />
          </button>
        )}
        <select
          name="number-of-images"
          id="number-of-images"
          className={styles.numberSelect}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          value={amount}
        >
          <option value="1">1 Image</option>
          <option value="2">2 Images</option>
          <option value="3">3 Images</option>
          <option value="4">4 Images</option>
        </select>
        <select
          name="image-size"
          id="image-size"
          className={styles.imageSizeSelect}
          onChange={(e) => setResolution(e.target.value)}
          value={resolution}
        >
          <option value="256x256">256x256</option>
          <option value="512x512">512x512</option>
          <option value="1024x1024">1024x1024</option>
        </select>
      </section>
      {images.length > 0 && (
        <section className={styles.imagesContainer}>
          <ImageList images={images} size={256} />
        </section>
      )}
    </>
  );
};

export default ImageGenerationPage;
