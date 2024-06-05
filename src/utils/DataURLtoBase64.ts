function dataURLtoBase64(blob: string) {

  const blobt = blob as unknown as Blob

  return new Promise<string>((resolve, reject) => {

    const reader = new FileReader()

    reader.readAsDataURL(blobt)
    reader.onloadend = () => {

      if (reader.result) {

        resolve(reader.result.toString())
      } else {

        reject("")
      }
    }

    reader.onerror = () => {

      reject("")
    }
  })
}

export { dataURLtoBase64 }