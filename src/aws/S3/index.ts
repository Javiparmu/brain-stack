import ReactS3Client from 'react-aws-s3-typescript';

const config = {
  bucketName: process.env.REACT_APP_S3_BUCKET_NAME,
  dirName: 'songs',
  region: process.env.REACT_APP_S3_REGION,
  accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_S3_SECRET_KEY,
};

export const S3UploadFile = async (
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  file: any,
  filename: string,
): Promise<any> => {
  const s3 = new ReactS3Client(config);

  try {
    const res = await s3.uploadFile(file, filename);

    return res;
  } catch (exception) {
    console.log('Exception', exception);
  }
};

export const S3DeleteFile = async (
  filepath: string,
): Promise<any> => {
  const s3 = new ReactS3Client(config);

  try {
    const res = await s3.deleteFile(filepath);

    return res;
  } catch (exception) {
    console.log(exception);
  }
};

export const S3ListFiles = async (): Promise<any> => {
  const s3 = new ReactS3Client(config);

  try {
    const fileList = await s3.listFiles();

    return fileList;
  } catch (exception) {
    console.log(exception);
  }
};
