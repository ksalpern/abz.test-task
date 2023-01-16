import React, { useEffect, useState } from 'react'
import './UploadImage.scss'

const UploadImage = ({ onInputValueChange, inputValue }) => {
  const [selectedFile, setSelectedFile] = useState()
  const [fileName, setFileName] = useState()

  console.log(selectedFile)

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setFileName(e.target.files[0].name)
    setSelectedFile(e.target.files[0])
    onInputValueChange(e.target.files[0])
  }
  return (
    <div className='upload'>
      <input type='file' required onChange={onSelectFile} value={inputValue} />
      <p className='upload__btn'>Upload</p>
      <p className={fileName ? 'fileName' : 'noFileUpload'}>{fileName ? fileName : 'Upload your photo'}</p>
    </div>
  )
}

export default UploadImage
