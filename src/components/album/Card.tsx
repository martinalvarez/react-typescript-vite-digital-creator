import { Album } from "../../types/Album";
import styles from './Card.module.css';

function Card({ album }: { album: Album }) {
    return (
        <>
            <div className={styles.container}>
                <div>
                    <img src={album.image_url} width={300} height={300}/>
                </div>
                <div>
                    {album.name} - [{album.release}]
                </div>
            </div>
        </>
    );
}

export default Card;