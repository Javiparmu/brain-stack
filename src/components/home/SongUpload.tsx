import { Button } from '@chakra-ui/react';
import { HomeStyles as styles } from '../../styles/HomeStyles';
import FileUpload from '../FileUpload';

export const SongUpload = (): JSX.Element => {
  return (
    <>
      <FileUpload
        style={{ width: '30vw', minWidth: '250px', marginTop: '4vh' }}
        placeholder="Upload the voice"
        acceptedFileTypes="audio/*"
      />
      <Button
        variant="outlined"
        onClick={() => console.log('generate')}
        style={{
          ...styles.createSongInputButton,
          textTransform: 'capitalize',
        }}
      >
        Generate
      </Button>
    </>
  );
};
