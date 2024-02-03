import { createActorContext } from '@xstate/react';
import { assign, setup } from 'xstate';

const initialContext = {
  currentLoop: 0,
  sharedState: 'typing',
  conversationResponses: [],
  imageResponses: [],
  conversationPrompt: '',
  imagePrompt: '',
};

export const typingMachine = setup({
  delays: {
    LOADING_TIME: 1500,
  },
}).createMachine({
  id: 'typing',
  initial: 'typing',
  context: initialContext,
  on: {
    RESET: {
      target: '.typing',
      actions: assign(() => ({ ...initialContext })),
    },
    UPDATE_RESPONSES: {
      guard: ({ event }) => event.selected === 'conversation' || event.selected === 'image',
      actions: assign({
        conversationResponses: ({ context, event }) => (event.selected === 'conversation' ? event.data : context.conversationResponses),
        imageResponses: ({ context, event }) => (event.selected === 'image' ? event.data : context.imageResponses),
      }),
    },
    UPDATE_PROMPT: {
      guard: ({ event }) => event.selected === 'conversation' || event.selected === 'image',
      actions: assign({
        conversationPrompt: ({ context, event }) => (event.selected === 'conversation' ? event.data : context.conversationPrompt),
        imagePrompt: ({ context, event }) => (event.selected === 'image' ? event.data : context.imagePrompt),
      }),
    },
  },
  states: {
    typing: {
      on: {
        TYPING_FINISHED: {
          target: 'loading',
          actions: assign({
            conversationPrompt: () => '',
            imagePrompt: () => '',
          }),
        },
      },
    },
    loading: {
      after: {
        LOADING_TIME: 'sendResponse',
      },
    },
    sendResponse: {
      on: {
        NEXT: {
          target: 'typing',
          actions: assign({
            currentLoop: ({ context }) => context.currentLoop + 1,
          }),
        },
      },
    },
  },
});

export const TypingContext = createActorContext(typingMachine);
