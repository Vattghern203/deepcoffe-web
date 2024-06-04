const createBlob = (file: File) => URL.createObjectURL(file);

URL.revokeObjectURL()

export { createBlob }