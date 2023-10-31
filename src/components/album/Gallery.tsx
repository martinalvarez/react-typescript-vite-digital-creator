import { Album } from "../../types/Album";
import Card from "./Card";
import styles from './Gallery.module.css';

function Gallery({ albums }: { albums: Album[]}) {
    return (
        <>
            <h1>Albums</h1>

            <div className={styles.container}>
                {albums.map((album)=>{
                    return (
                        <Card key={album.id} album={album} />
                    );
                })}
            </div>
        </>
    );
}

export default Gallery;