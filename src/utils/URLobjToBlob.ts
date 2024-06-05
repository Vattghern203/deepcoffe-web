export function URLobjToBlob(url: string): Promise<Blob> {
  return fetch(url).then(response => {
      if (!response.ok) {
          throw new Error(`Failed to fetch Blob from URL: ${response.statusText}`);
      }
      return response.blob();
  });
}
