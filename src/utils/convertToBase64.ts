function convertImageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
          if (reader.result) {
              resolve(reader.result.toString());
          } else {
              reject(new Error("Failed to convert image to base64"));
          }
      };

      reader.onerror = () => {
          reject(new Error("Error reading the file"));
      };

      reader.readAsDataURL(file);
  });
}

export { convertImageToBase64 }