const base64ToBlob = (base64String: string): Blob => {
  // Split the base64 string into two parts
  const parts = base64String.split(';base64,');

  // Extract the content type of the file from the base64 string
  const contentType = parts[0].split(':')[1];

  // Convert the base64 string to a Uint8Array buffer
  const byteCharacters = atob(parts[1]);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);


  return new Blob([byteArray], { type: contentType });
}

export {base64ToBlob}