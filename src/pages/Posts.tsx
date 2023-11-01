import { useEffect, useState } from "react";
import { POSTS_API } from "../constants/API";
import { Post } from "../types/Post";
import PostGrid from "../components/posts/Grid";
import { useLocation } from "react-router-dom";
import Loading from "../components/spinner/Loading";

function PostsPage(props) {
    // Obtén la ubicación actual
    const location = useLocation();
    // Analiza el querystring
    const searchParams = new URLSearchParams(location.search);
    // Accede al valor de un parámetro específico (por ejemplo, 'id')
    const idParam = searchParams.get('userId');

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(()=>{
        async function fetchPosts() {
            setLoading(true);
            let url = POSTS_API;
            if (idParam) {
                url = `${url}/?userId=${idParam}`;
            }

            const response = await fetch(url);
            const data: Post[] = await response.json();
            console.log(data);
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