'use client';

import { ChatCompletionMessageParam } from 'openai/resources/chat';
import { memo, useEffect, useRef } from 'react';
import AvatarIcon from '../ui/avatar-icon';
import styles from '@/app/styles/Dashboard.module.css';
import ReactMarkdown from 'react-markdown';
import { highlightAll } from 'prismjs';
import CopyToClipboardButton from '../ui/copy-to-clipboard-button';

interface MessageListProps {
  messages: ChatCompletionMessageParam[];
  isCode?: boolean;
}

const MessageList = memo(function MessageList({ messages, isCode = false }: MessageListProps) {
  const markdownCodeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    highlightAll();
  }, [messages]);

  return (
    <>
      {messages.map((message, index) => (
        <div key={index} className={`${styles.message} ${message.role === 'user' ? styles.user : styles.bot}`}>
          <AvatarIcon role={message.role} />
          {isCode ? (
            <ReactMarkdown
              components={{
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                pre: ({ node, ...props }) => (
                  <div className={styles.markdownPre}>
                    <CopyToClipboardButton textRef={markdownCodeRef} />
                    <pre ref={markdownCodeRef} {...props} />
                  </div>
                ),
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                code: ({ node, ...props }) => <code className={styles.markdownCode} {...props} />,
              }}
              className={styles.markdown}
            >
              {message.content as string}
            </ReactMarkdown>
          ) : (
            <>{message.content ?? ''}</>
          )}
        </div>
      ))}
    </>
  );
});

export default MessageList;
