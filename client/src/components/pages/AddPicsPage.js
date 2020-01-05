import React, { useState, useCallback, useEffect} from 'react';
import { useDropzone } from 'react-dropzone';
import { css, StyleSheet } from 'aphrodite';

import firebase from '../../firebase/firebase';
import Header from '../Header';

const AddPicsPage = () => {

  const [files, setFiles] = useState([]);
  const [addedFiles, setAddedFiles] = useState([]);
  const [newAlbumName, setNewAlbumName] = useState([]);
  const [albumList, setAlbumList] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState([]);
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  useEffect(() => {
    firebase.database().ref('albums').once('value').then((snapshot) => {
      let albums = [];
      snapshot.forEach((child) => {
        albums.push(child.key);
      })
      setAlbumList(albums);
    })
  }, [])

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length > 1) {
      alert('Sorry darby you can only do one file at a time!');
    } else {
      setFiles(acceptedFiles);
    }
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  const submitFiles = () => {
    console.log('trying to submit files...');
    if (!width || !height || selectedAlbum.length === 0 || !files) {
      alert(`Darby! You didn't enter either the file, intended album, height or width!`);
    } else {
      files.forEach((file) => {
        firebase.storage().ref(`portraits/${file.name}`).put(file).then((snapshot) => {
          setAddedFiles(files);
          return firebase.storage().ref(snapshot.metadata.fullPath).getDownloadURL();
        }).then((url) => {
          return firebase.database().ref(`${selectedAlbum}/${file.name.substring(0, file.name.length - 4)}/downloadURL`).set(url);
        }).then(() => {
          firebase.database().ref(`${selectedAlbum}/${file.name.substring(0, file.name.length - 4)}/width`).set(width)
            .catch((error) => {console.log(error)});
          firebase.database().ref(`${selectedAlbum}/${file.name.substring(0, file.name.length - 4)}/height`).set(height)
            .catch((error) => {console.log(error)});
        })
      }) 
    }
  }

  const submitAlbum = () => {
    firebase.database().ref(`albums/${newAlbumName}`).set('').then((snapshot) => {
      console.log(snapshot)
    })
  }

  return (
    <>
      <Header />
      <div className={css(styles.spacer)}></div>
      <div className={css(styles.addPicsPage)}>
        <h3>First, choose which album you're adding these pics to</h3>
        <select 
          className={css(styles.textField)}
          onChange={(e) => setSelectedAlbum(e.target.value)}
        > 
          {albumList.map((album) => {
            return <option key={album}>{album}</option>
          })}
        </select>
        <div className={css(styles.dropzone)} {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p className={css(styles.text)}>Drop the files here ...</p> :
              <p className={css(styles.text)}>Second, drag a file here, or click to select a file</p>
          }
        </div>
        <h3>Third, add dimensions to the picture</h3>
        {files.length > 0 ? <p>{files[0].name}</p> : <p>No files here!</p>}
        <input
          type="number"
          placeholder="width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          className={css(styles.textField)}
        />
        <input
          type="number"
          placeholder="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className={css(styles.textField)}
        />
        <div className={css(styles.submitButtonContainer)}>
          <button className={css(styles.submitFilesButton)} onClick={submitFiles}>Fourth, submit files!</button>
        </div>
        <div>
          <p>Successfully added these files:</p>
          <div className={css(styles.addedFilesContainer)}>
            {addedFiles.length === 0 ? 
              <p>no files added!</p>
            : addedFiles.map((file, index) => {
              return <p key={index}>{file.name}</p>
            })}
          </div>
        </div>

        <div>
          <h2>Make a new album!</h2>
          <input
            type="text"
            placeholder="new album name"
            value={newAlbumName}
            onChange={(e) => setNewAlbumName(e.target.value)}
            className={css(styles.textField)}
          />
          <button className={css(styles.submitAlbumButton)} onClick={submitAlbum}>Make new album!</button>
        </div>
      </div>
    </>
  )
}

export default AddPicsPage;

const styles = StyleSheet.create({
  addPicsPage: {
    width: '90%',
    margin: '0 auto'
  },
  spacer: {
    height: 55
  },
  dropzone: {
    width: '80%',
    height: 200,
    border: '1px solid blue',
    borderRadius: 5,
    backgroundColor: '#ecf0f1',
    margin: '0 auto',
    marginTop: 30
  },
  text: {
    fontSize: 30
  },
  submitButtonContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  submitFilesButton: {
    fontSize: 30,
    width: '65%',
    marginTop: 20,
    backgroundColor: '#2ecc71',
    color: 'white',
    borderRadius: 10,
    ':hover': {
      backgroundColor: '#16a085',
      cursor: 'pointer'
    }
  },
  addedFilesContainer: {
    border: '1px solid blue',
    borderRadius: 5
  },
  submitAlbumButton: {
    fontSize: 30,
    width: '40%',
    marginTop: 20,
    backgroundColor: '#9b59b6',
    color: 'white',
    borderRadius: 10,
    ':hover': {
      backgroundColor: '#8e44ad',
      cursor: 'pointer'
    }
  },
  textField: {
    fontSize: 22,
    width: 400,
    marginTop: 20,
    padding: 10,
    display: 'block'
  },
})

