import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file) 
  console.log("this is progress",progress, "this is URL", url);
  return (
    <div className="progress-bar">progress</div>
  )
}

export default ProgressBar