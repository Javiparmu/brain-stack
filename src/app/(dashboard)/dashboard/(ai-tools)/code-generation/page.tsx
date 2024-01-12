'use client';

import { CodeIcon, RobotIcon } from '@/app/components/icons';
import styles from '@/app/styles/Dashboard.module.css';
import { useState } from 'react';
import { ChatCompletionMessageParam } from 'openai/resources/chat';
import { Toaster } from 'sonner';
import { useRouter } from 'next/navigation';
import MessageList from '@/app/components/dashboard/message-list';
import { errorToast } from '@/app/lib/toasts';
import { useSession } from 'next-auth/react';
import { useFetch } from '@/app/hooks/use-fetch';
import MultilineInput from '@/app/components/ui/multiline-input';

const CodePage = () => {
  const router = useRouter();
  const session = useSession();
  const fetchApi = useFetch<ChatCompletionMessageParam>();

  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [loadingResponse, setLoadingResponse] = useState<boolean>(false);

  const userId = session.data?.user?.userId;

  const onSubmit = async (prompt: string) => {
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
  };

  return (
    <>
      <header className={styles.sectionTitle}>
        <CodeIcon styles={`${styles.codeIcon} ${styles.icon}`} size={25} color="#3da555" />
        <h1>Code generation</h1>
      </header>
      <section className={styles.sectionSubtitle}>
        <h2>Solve your code questions with our Code generation bot.</h2>
      </section>
      <MultilineInput
        value={inputPrompt}
        onChange={(e) => setInputPrompt(e.target.value)}
        onSubmit={() => onSubmit(inputPrompt ?? '')}
        placeholder="Send a message"
        loading={loadingResponse}
      />
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
