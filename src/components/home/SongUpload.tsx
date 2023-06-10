import { Button } from '@chakra-ui/react';
import { HomeStyles as styles } from '../../styles/HomeStyles';
import FileUpload from '../FileUpload';
import { useForm } from 'react-hook-form';

export const SongUpload = (): JSX.Element => {
  const { control } = useForm({
    defaultValues: {
      song: '',
    },
  });

  return (
    <>
      <FileUpload
        style={{ width: '30vw', minWidth: '250px', marginTop: '4vh' }}
        name="song"
        placeholder="Upload the voice"
        acceptedFileTypes="audio/*"
        control={control}
        isRequired
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
