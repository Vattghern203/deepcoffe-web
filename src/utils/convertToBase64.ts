const convertBlobToBase64 = (blob: Blob) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);

  reader.onloadend = () => {
    return reader.result as string;
  };
};

export { convertBlobToBase64 }