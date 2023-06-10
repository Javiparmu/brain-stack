import {
  Input,
  FormControl,
  InputGroup,
  InputLeftElement,
  FormErrorMessage,
  Icon,
} from '@chakra-ui/react';
import { useController } from 'react-hook-form';
import { FC, useRef } from 'react';
import { MdMusicNote } from 'react-icons/md';

interface FileUploadProps {
  name: string;
  placeholder?: string;
  acceptedFileTypes?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  isRequired?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
}

const FileUpload: FC<FileUploadProps> = ({
  name,
  placeholder,
  acceptedFileTypes,
  control,
  isRequired = false,
  style,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    field: { onChange, value },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: { required: isRequired },
  });

  return (
    <FormControl isInvalid={invalid} isRequired style={{ ...style }}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" top={1}>
          <Icon as={MdMusicNote} />
        </InputLeftElement>
        <input
          ref={inputRef}
          type="file"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e: any) => {
            onChange(e?.target?.files[0]);
          }}
          accept={acceptedFileTypes}
          style={{ display: 'none' }}
        />
        <Input
          placeholder={placeholder || 'Your file...'}
          onClick={() => inputRef?.current?.click()}
          value={value?.name}
          borderColor="gray.400"
          _hover={{ borderColor: 'gray.500' }}
          _focus={{ borderColor: 'gray.700' }}
          height="50px"
        />
      </InputGroup>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default FileUpload;
