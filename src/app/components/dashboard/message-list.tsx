import { CreateChatCompletionRequestMessage } from 'openai/resources/chat';
import { FC } from 'react';
import AvatarIcon from '../ui/avatar-icon';
import styles from '@/styles/Dashboard.module.css';
import ReactMarkdown from 'react-markdown';

interface MessageListProps {
  messages: CreateChatCompletionRequestMessage[];
  isCode?: boolean;
}

const MessageList: FC<MessageListProps> = ({ messages, isCode = false }) => {
  return (
    <>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`${styles.message} ${
            message.role === 'user' ? styles.user : styles.bot
          }`}
        >
          <AvatarIcon role={message.role} />
          {isCode ? (
            <ReactMarkdown
              components={{
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                pre: ({ node, ...props }) => (
                  <div className={styles.markdownPre}>
                    <pre {...props} />
                  </div>
                ),
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                code: ({ node, ...props }) => (
                  <code className={styles.markdownCode} {...props} />
                ),
              }}
              className={styles.markdown}
            >
              {message.content ?? ''}
            </ReactMarkdown>
          ) : (
            <>{message.content ?? ''}</>
          )}
        </div>
      ))}
    </>
  );
};

export default MessageList;
