import { useEffect, useState } from 'react'
import { Album } from './types/Album';
import './App.css'

function App() {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(()=> {
    async function fetchAlbums() {
      const url = 'http://127.0.0.1:8000/music/api/v1/albums/';
      try {
        const response = await fetch(url);
        const data: Album[] = await response.json();
        if (!response.ok) {
          return;
        }        
        console.log(data);
        setAlbums(data);
      } catch(error) {
        console.log('An error has ocurred loading albums.');
      }
    }

    async function fetchArtists() {
      const url = 'http://127.0.0.1:8000/music/api/v1/artists/';
      try {
        const response = await fetch(url);
        if (!response.ok) {
          return;
        }

        console.log(response);
        const data: Album[] = await response.json();
        console.log(data);
      } catch(error) {
        console.log('An error has ocurred loading artists.');
      }
    }

    fetchAlbums();
    fetchArtists();

  }, []);
 
  return (
    <>
      <h1>Testing</h1>
      
      <ul>
        {albums.map((album)=>{
            return (
              <li key={album.id}>
                {album.name} - [{album.release}]
                <hr></hr>
                <img src={album.image_url} width={300} height={300}/>
              </li>
            );
        })}
      </ul>

    </>
  )
}

export default App
