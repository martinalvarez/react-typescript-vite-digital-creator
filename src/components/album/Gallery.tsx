import { Album } from "../../types/Album";
import Card from "./Card";
import styles from './Gallery.module.css';

function Gallery({ albums }: { albums: Album[]}) {
    return (
        <>
            <h1>Albums</h1>

            <ul className={styles.container}>
                {albums.map((album)=>{
                    return (
                        <li key={album.id}>
                            <Card album={album} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Gallery;