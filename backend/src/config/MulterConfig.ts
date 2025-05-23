import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import { AppConfig } from './AppConfig';

cloudinary.config({
  cloud_name: AppConfig.getCloudinaryCloudName(),
  api_key: AppConfig.getCloudinaryApiKey(),
  api_secret: AppConfig.getCloudinaryApiSecret(),
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: 'taskmaster_uploads',
    format: 'webp',
    transformation: [{ width: 800, height: 800, crop: 'limit' }],
  }),
});

export const upload = multer({ storage });
