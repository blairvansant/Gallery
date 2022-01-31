import ImageGrid from "./comps/ImageGrid";
import Title from "./comps/Title"; 
import UploadForm from "./comps/UploadForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <UploadForm />
        <ImageGrid />
      </header>
    </div>
  );
}

export default App;
