function convertBase64toBlob(base64String: string) {

  const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '')

  const byteCharacters = atob(base64Data)

  const byteArray = new Uint8Array(byteCharacters.length)

  for (let i = 0; i < byteCharacters.length; i++) {

    byteArray[i] = byteCharacters.charCodeAt(i)
  }

  return new Blob(
    [byteArray],
    {
      type: 'image/png'
    }
  )
}

export { convertBase64toBlob }