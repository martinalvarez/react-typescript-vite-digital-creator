import store from "../redux/store";

function FavoritesPage() {
    return (
        <>
            <h1>Favorites</h1>

            <ul>
                {store.getState().map((user)=>{
                    return (
                        <li key={user.id}>
                        {user.name} - ({user.username})
                    </li>                        
                    );
                })}
            </ul>
        </>);
}

export default FavoritesPage;