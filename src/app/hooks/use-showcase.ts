import { useEffect, useMemo } from 'react';
import { TypingContext } from '../state-machines/typing-machine';
import { useIsMobile } from './use-is-mobile';

const TIME_BEFORE_SEND = 500;
const TIME_BEFORE_RESET = 4000;

const imageMessages = [
  'Show me an image of a little rabbit eating a carrot.',
  '/images/carrot-rabbit.webp',
  'Now show me an image of a happy golden with a hat.',
  '/images/dog-hat.webp',
];

const conversationMessages = [
  'Hello, can I use these tools for free?',
  'Sure! If you want to use our tools for free, you need to have an OpenAI account and set your own API token in the dashboard settings.',
  "What if I don't have an OpenAI account?",
  'You can do 5 free request to our platforms before you decide whether to subscribe or not. If you want more, you need to subscribe or use an OpenAI token.',
];

const mobileImageMessages = [
  'An image of a little rabbit',
  ...imageMessages.slice(1, 2),
  'An image of a happy golden',
  ...imageMessages.slice(3, 4),
];

const mobileConversationMessages = [
  'Can I use these tools for free?',
  ...conversationMessages.slice(1, 2),
  "I don't have an OpenAI account",
  ...conversationMessages.slice(3, 4),
];

export const useShowcase = (type: 'conversation' | 'image') => {
  const isMobile = useIsMobile();

  const messages = useMemo(() => {
    if (type === 'conversation') {
      return isMobile ? mobileConversationMessages : conversationMessages;
    } else {
      return isMobile ? mobileImageMessages : imageMessages;
    }
  }, [type, isMobile]);
  const prompts = useMemo(() => messages.filter((_, index) => index % 2 === 0), [messages]);

  const { send } = TypingContext.useActorRef();
  const currentLoop = TypingContext.useSelector((state) => state.context.currentLoop);
  const displayedText = TypingContext.useSelector((state) => state.context[`${type}Prompt`]);
  const responses = TypingContext.useSelector((state) => state.context[`${type}Responses`]);

  const isTyping = TypingContext.useSelector((state) => state.matches('typing'));
  const isLoading = TypingContext.useSelector((state) => state.matches('loading'));
  const isSendResponse = TypingContext.useSelector((state) => state.matches('sendResponse'));

  useEffect(() => {
    let interval: NodeJS.Timer;
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      const prompt = prompts[currentLoop];

      if (!prompt) return;

      if (displayedText.length < prompt?.length) {
        interval = setInterval(() => {
          send({
            type: 'UPDATE_PROMPT',
            selected: type,
            data: prompt.substring(0, displayedText.length + 1),
          });
        }, 1000 / prompt.length);
      } else {
        timeout = setTimeout(() => {
          send({ type: 'TYPING_FINISHED' });
        }, TIME_BEFORE_SEND);
      }
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayedText, isTyping]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isLoading) {
      send({ type: 'UPDATE_RESPONSES', selected: type, data: [...responses, messages[currentLoop * 2]] });
    }

    if (isSendResponse) {
      send({ type: 'UPDATE_RESPONSES', selected: type, data: [...responses, messages[currentLoop * 2 + 1]] });

      const isFinished = currentLoop === prompts.length - 1;

      timeout = setTimeout(
        () => {
          send({ type: 'NEXT' });
          if (isFinished) reset();
        },
        isFinished ? TIME_BEFORE_RESET : TIME_BEFORE_SEND,
      );
    }

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isSendResponse]);

  const reset = () => {
    send({ type: 'RESET' });
  };

  return {
    prompt: displayedText,
    responses,
    loading: isLoading,
  };
};
