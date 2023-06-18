// import theme from '@/theme/theme';
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';
// import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { FC } from 'react';

// export const ThemeToggleButton: FC = () => {
//   const { toggleColorMode } = useColorMode();
//   return (
//     <AnimatePresence mode="wait" initial={true}>
//       <motion.div
//         style={{ display: 'inline-block' }}
//         key={useColorModeValue('light', 'dark')}
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: 20, opacity: 0 }}
//         transition={{ duration: 0.1 }}
//       >
//         <IconButton
//           aria-label="Toggle theme"
//           bgColor={useColorModeValue(
//             theme.colors.primary,
//             theme.colors.primaryDark,
//           )}
//           color={useColorModeValue('white', 'black')}
//           _hover={{
//             opacity: 0.9,
//           }}
//           icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
//           onClick={toggleColorMode}
//         />
//       </motion.div>
//     </AnimatePresence>
//   );
// };
