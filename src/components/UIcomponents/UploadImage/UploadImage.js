import React, { useEffect, useState } from 'react'
import './UploadImage.scss'

const UploadImage = ({ onInputValueChange, inputValue }) => {
  const [selectedFile, setSelectedFile] = useState()
  const [fileName, setFileName] = useState()

  console.log(selectedFile)

  const onSelectFile = e => {
    let files = e.target.files;
    if (!files || files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setFileName(files[0].name)
    setSelectedFile(files[0])
    onInputValueChange({ photo: files[0] })
  }
  return (
    <div className='upload'>
      <input type='file' required onChange={onSelectFile} />
      <p className='upload__btn'>Upload</p>
      <p className={fileName ? 'fileName' : 'noFileUpload'}>{fileName ? fileName : 'Upload your photo'}</p>
    </div>
  )
}

export default UploadImage
