import { useEffect, useState } from 'react'
import { Album } from '../types/Album';
import Gallery from '../components/album/Gallery';

function AlbumsPage() {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(()=> {
    async function fetchAlbums() {
      const url = 'http://127.0.0.1:8000/music/api/v2/albums/';
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
      <Gallery albums={albums} />
    </>
  )
}

export default AlbumsPage;
