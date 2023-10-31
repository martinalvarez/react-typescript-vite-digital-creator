import { Album } from "../../types/Album";
import styles from './Card.module.css';

function Card({ album }: { album: Album }) {
    return (
        <>
            <div className={styles.container}>
                <div>
                    <img className={styles.image} src={album.image_url} />
                </div>

                <div className={styles.description}>
                    {album.name} - [{album.release}]
                </div>                
            </div>
        </>
    );
}

export default Card;