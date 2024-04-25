
interface UploadInputProps {

  
}

export default function UploadInput() {

  return (

    <input
      id="file-form"
      className="sr-only"
      type="file"
      ref={imageInputRef}
      onChange={handleChange}
      accept="image/*"
      required
    />
  )
}