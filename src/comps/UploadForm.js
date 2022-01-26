import React from "react";

const UploadForm = () => {

  const changeHandler = (e) => {
    console.log("it changed")
  }
  return (
    <form>
      <input type="file" onChange={changeHandler}/>
    </form>
  )
}

export default UploadForm;