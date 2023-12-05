'use client';

import { CodeIcon, RobotIcon, SendIcon } from '@/app/components/icons';
import styles from '@/styles/Dashboard.module.css';
import { FC, useEffect, useRef, useState } from 'react';
import { ChatCompletionMessageParam } from 'openai/resources/chat';
import axios from 'axios';
import { Toaster } from 'sonner';
import { useRouter } from 'next/navigation';
import LoadingDots from '@/app/components/ui/loading-dots';
import MessageList from '@/app/components/dashboard/message-list';
import { errorToast } from '@/lib/toasts';

const CodePage: FC = () => {
  const router = useRouter();
  const [hasText, setHasText] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [loadingResponse, setLoadingResponse] = useState<boolean>(false);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

      setHasText(textareaRef.current.value.trim() !== '');
    }
  };

  const onSubmit = async (prompt: string) => {
    try {
      setLoadingResponse(true);

      setInputPrompt('');

      const userMessage: ChatCompletionMessageParam = {
        role: 'user',
        content: prompt,
      };
      const newMessages = [...messages, userMessage];

      setMessages((current) => [userMessage, ...current]);

      const response = await axios.post('/api/code', {
        messages: newMessages,
      });

      setMessages((current) => [response.data, ...current]);

      setLoadingResponse(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error?.response?.status !== 403) {
        errorToast(error?.response?.data);

        setLoadingResponse(false);
      }
    } finally {
      router.refresh();
    }
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
        <CodeIcon styles={styles.codeIcon} size={25} color="#3da555" />
        <h1>Code generation</h1>
      </header>
      <section className={styles.sectionSubtitle}>
        <h2>Solve your code questions with our Code generation bot.</h2>
      </section>
      <section className={styles.inputContainer}>
        <textarea
          ref={textareaRef}
          spellCheck={false}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          onChange={(e) => setInputPrompt(e.target.value)}
          value={inputPrompt}
          placeholder="Send a message"
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
      {messages.length > 0 ? (
        <section className={styles.conversationContainer}>
          <MessageList messages={messages} isCode />
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

export default CodePage;