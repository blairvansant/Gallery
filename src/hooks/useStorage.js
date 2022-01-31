import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp  } from '../firebase/config';

// passing in file from UploadForm
const useStorage = (file) => {
  // 3 pieces of state - 'progress' of the upload, 'error' from upload, and 'url' for img from storage after upload 
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  //useEffect hook takes in a function as paramater, the second argument is the dependencies. The function fires everytime the dependency changes.
  useEffect(() => {
    // references - for where the file should be saved once uploaded
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images')

    storageRef.put(file).on('state_changeed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      setProgress(percentage);
    }, (err) => {
       setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      collectionRef.add({ url, createdAt });
      setUrl(url);
    })
  }, [file]);

  return { progress, url, error }
}

export default useStorage;