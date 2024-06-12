function splitFileExtension(fileName: string): string {

  return fileName.split('/')[1]
}

export { splitFileExtension }