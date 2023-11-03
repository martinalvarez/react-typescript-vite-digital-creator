import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Post } from "../types/Post";
import { POSTS_API } from "../constants/API";
import Loading from "../components/spinner/Loading";
import PostGrid from "../components/posts/Grid";

function PostsPage(props) {
    // Obtén la ubicación actual
    const location = useLocation();
    // Analiza el querystring
    const searchParams = new URLSearchParams(location.search);
    // Accede al valor de un parámetro específico (por ejemplo, 'id')
    const idParam = searchParams.get('userId');

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(()=>{
        async function fetchPosts() {
            let url = POSTS_API;
            if (idParam) {
                url = `${url}/?userId=${idParam}`;
            }

            const response = await fetch(url);
            const data: Post[] = await response.json();
            setPosts(data);
            setLoading(false);
        }
        
        fetchPosts();
    }, [idParam]);

    return (
        <>
            <h1>Posts</h1>

            {loading ? <Loading /> : <PostGrid posts={posts} /> }
        </>
    );
}

export default PostsPage;