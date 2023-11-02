import { Post } from "../../types/Post";
import styles from './Grid.module.css';

function PostGrid({ posts }: { posts: Post[] }) {
    return (
        <>
            {posts.map((post)=>{
                return (
                    <article className={styles.article} key={post.id}>
                        <h3>{post.title}</h3>

                        <p>{post.body}</p>
                    </article>
                );
            })}        
        </>
    );
}

export default PostGrid;