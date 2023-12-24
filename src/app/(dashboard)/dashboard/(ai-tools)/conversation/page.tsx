'use client';

import { ConversationIcon, RobotIcon, SendIcon } from '@/app/components/icons';
import styles from '@/app/styles/Dashboard.module.css';
import { FC, useEffect, useRef, useState } from 'react';
import { ChatCompletionMessageParam } from 'openai/resources/chat';
import { Toaster } from 'sonner';
import { useRouter } from 'next/navigation';
import LoadingDots from '@/app/components/ui/loading-dots';
import MessageList from '@/app/components/dashboard/message-list';
import { errorToast } from '@/app/lib/toasts';
import { useSession } from 'next-auth/react';

const ConversationPage: FC = () => {
  const router = useRouter();
  const [hasText, setHasText] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [loadingResponse, setLoadingResponse] = useState<boolean>(false);
  const session = useSession();

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

      setHasText(textareaRef.current.value.trim() !== '');
    }
  };

  const onSubmit = async (prompt: string) => {
    setLoadingResponse(true);

    setInputPrompt('');

    const userMessage: ChatCompletionMessageParam = {
      role: 'user',
      content: prompt,
    };
    const newMessages = [...messages, userMessage];

    setMessages((current) => [userMessage, ...current]);

    const userId = session.data?.user?.userId;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? ''}/conversation`, {
      method: 'POST',
      body: JSON.stringify({
        messages: newMessages,
        userId,
      }),
    });

    if (response.ok) {
      const message = await response.json();
      setMessages((current) => [message, ...current]);
    } else {
      const { error } = await response.json();
      errorToast(error);
    }

    setLoadingResponse(false);
    router.refresh();
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
        <ConversationIcon styles={styles.convIcon} size={25} color="#676bb9" />
        <h1>Conversation</h1>
      </header>
      <section className={styles.sectionSubtitle}>
        <h2>Start a conversation with our AI Chatbot.</h2>
      </section>
      <section className={styles.inputContainer}>
        <textarea
          ref={textareaRef}
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
          <MessageList messages={messages} />
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

export default ConversationPage;
