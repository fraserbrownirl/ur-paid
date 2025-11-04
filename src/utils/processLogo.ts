import { removeBackground, loadImage } from './backgroundRemoval';

export const processLogoBackground = async (logoPath: string): Promise<string> => {
  try {
    // Fetch the logo image
    const response = await fetch(logoPath);
    const blob = await response.blob();
    
    // Load image
    const img = await loadImage(blob);
    
    // Remove background
    const processedBlob = await removeBackground(img);
    
    // Convert to data URL
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(processedBlob);
    });
  } catch (error) {
    console.error('Error processing logo:', error);
    throw error;
  }
};
