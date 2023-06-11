import {
  Input,
  FormControl,
  InputGroup,
  InputLeftElement,
  Icon,
} from '@chakra-ui/react';
import { ChangeEvent, FC, useRef, useState } from 'react';
import { MdMusicNote } from 'react-icons/md';

interface FileUploadProps {
  placeholder?: string;
  acceptedFileTypes?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
}

const FileUpload: FC<FileUploadProps> = ({
  placeholder,
  acceptedFileTypes,
  style,
}) => {
  const [file, setFile] = useState<File | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files?.length) {
      setFile(event?.target?.files[0]);
    }
  };

  return (
    <FormControl isRequired style={{ ...style }}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" top={1}>
          <Icon as={MdMusicNote} />
        </InputLeftElement>
        <input
          ref={inputRef}
          type="file"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={onFileChange}
          accept={acceptedFileTypes}
          style={{ display: 'none' }}
        />
        <Input
          placeholder={placeholder || 'Your file...'}
          onClick={() => inputRef?.current?.click()}
          value={file?.name || ''}
          borderColor="gray.400"
          _hover={{ borderColor: 'gray.500' }}
          _focus={{ borderColor: 'gray.700' }}
          height="50px"
        />
      </InputGroup>
    </FormControl>
  );
};

export default FileUpload;
