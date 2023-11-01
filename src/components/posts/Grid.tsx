import { Post } from "../../types/Post";

function PostGrid({ posts }: { posts: Post[] }) {
    return (
        <>
            {posts.map((post)=>{
                return (
                    <div key={post.id}>
                        <h3>{post.title}</h3>

                        <p>{post.body}</p>
                    </div>
                );
            })}        
        </>
    );
}

export default PostGrid;