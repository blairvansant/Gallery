import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
// for storing the file in local state
const [file, setFile] = useState(null);
const [error, setError] = useState(null);

// allowed file type
const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    // for accessing the file that the user has selected
    let selected = e.target.files[0];
    
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      // resets error after selecting valid file
      setError('')
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)')
    }
  }
  return (
    <form>
      <input type="file" onChange={changeHandler}/>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div>}
        { file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  )
}

export default UploadForm;