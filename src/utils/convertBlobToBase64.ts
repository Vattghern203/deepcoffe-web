export function convertBlobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
          if (reader.result) {
              resolve(reader.result.toString());
          } else {
              reject(new Error('Failed to convert Blob to Base64'));
          }
      };
      reader.onerror = () => {
          reject(new Error('Failed to read the Blob'));
      };
      reader.readAsDataURL(blob);
  });
}
