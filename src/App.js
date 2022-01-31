// import { useState } from "react/cjs/react.development";
// import ImageGrid from "./comps/ImageGrid";
// import Modal from "./comps/Modal";
import React from "react";
import { useState } from "react/cjs/react.development";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Title from "./comps/Title"; 
import UploadForm from "./comps/UploadForm";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg}/>
        { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
      </header>
    </div>
  );
}

export default App;
