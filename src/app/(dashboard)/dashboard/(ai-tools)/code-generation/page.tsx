'use client';

import { CodeIcon, RobotIcon } from '@/app/components/icons';
import styles from '@/app/styles/Dashboard.module.css';
import { FC, useCallback, useState } from 'react';
import { ChatCompletionMessageParam } from 'openai/resources/chat';
import { Toaster } from 'sonner';
import { useRouter } from 'next/navigation';
import LoadingDots from '@/app/components/ui/loading-dots';
import MessageList from '@/app/components/dashboard/message-list';
import { errorToast } from '@/app/lib/toasts';
import { useSession } from 'next-auth/react';
import SendButton from '@/app/components/dashboard/send-button';
import { useFetch } from '@/app/hooks/use-fetch';
import { useMultiLineInput } from '@/app/hooks/use-mutiline-input';

const CodePage: FC = () => {
  const router = useRouter();
  const session = useSession();
  const fetchApi = useFetch<ChatCompletionMessageParam>();
  const { inputRef, hasText, handleInput, handleEnter } = useMultiLineInput({
    onEnter: (value) => onSubmit(value),
  });

  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [loadingResponse, setLoadingResponse] = useState<boolean>(false);

  const userId = session.data?.user?.userId;

  const onSubmit = useCallback(
    async (prompt: string) => {
      setLoadingResponse(true);
      setInputPrompt('');

      const userMessage: ChatCompletionMessageParam = {
        role: 'user',
        content: prompt,
      };
      const newMessages = [...messages, userMessage];

      setMessages((current) => [userMessage, ...current]);

      await fetchApi('/code', {
        body: {
          messages: newMessages,
          userId,
        },
        onSuccess: (data) => setMessages((current) => [data, ...current]),
        onError: (error) => errorToast(error),
      });

      setLoadingResponse(false);
      router.refresh();
    },
    [fetchApi, messages, router, userId],
  );

  return (
    <>
      <header className={styles.sectionTitle}>
        <CodeIcon styles={`${styles.codeIcon} ${styles.icon}`} size={25} color="#3da555" />
        <h1>Code generation</h1>
      </header>
      <section className={styles.sectionSubtitle}>
        <h2>Solve your code questions with our Code generation bot.</h2>
      </section>
      <section className={styles.inputContainer}>
        <textarea
          ref={inputRef}
          spellCheck={false}
          onKeyDown={handleEnter}
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
          <SendButton disabled={!hasText} onClick={() => onSubmit(inputRef.current?.value || '')} />
        )}
      </section>
      {messages.length > 0 ? (
        <section className={styles.conversationContainer}>
          <MessageList messages={messages} isCode />
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

export default CodePage;
