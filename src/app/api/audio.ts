import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  AWS.config.update({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: process.env.NEXT_PUBLIC_S3_REGION,
  });

  const s3 = new AWS.S3();

  const params = {
    Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
    Key: JSON.parse(req.body).key,
  };

  try {
    const url = await s3.getSignedUrlPromise('getObject', params);
    res.status(200).json({ url });
  } catch (error) {
    console.error('Error al generar la URL firmada:', error);
    res.status(500).json({ error: 'Error al generar la URL firmada' });
  }
}
