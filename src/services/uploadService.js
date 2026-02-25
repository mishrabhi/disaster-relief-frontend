import api from './api';

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('image', file);

  const response = await api.post('/uploads/upload-image', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data;
};

// Upload multiple files to Cloudinary
const uploadToCloudinary = async (files) => {
  if (!files || files.length === 0) return [];

  const uploadedUrls = [];

  for (const file of files) {
    try {
      const result = await uploadImage(file);
      if (result.imageUrl) {
        uploadedUrls.push(result.imageUrl);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }

  return uploadedUrls;
};

export default uploadImage;
export { uploadToCloudinary };
