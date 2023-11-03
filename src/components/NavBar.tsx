import { useContext } from "react";
import { Link } from "react-router-dom";
import LayoutContext from "../context/LayoutContext";
interface Menu {
    id: number;
    label: string;
    location: string;
}

const inlineStyle = {
    container: {
        display: 'flex',
        listStyle: 'none',
    },
    link: {
        marginRight: '1rem',
    }
};

const menu: Menu[] = [
    {
        id: 1,
        label: 'Albums',
        location: '/albums',
    },
    {
        id: 2,
        label: 'About',
        location: '/about',
    },
    {
        id: 3,
        label: 'Login',
        location: '/login',
    },
    {
        id: 4,
        label: 'Users',
        location: '/users',
    },    
    {
        id: 5,
        label: 'Posts',
        location: '/posts',
    },      
    {
        id: 6,
        label: 'Favorites',
        location: '/favorites',
    },        
    {
        id: 7,
        label: 'Settings',
        location: '/settings',
    },     
];

function NavBar() {
    const { toggleLayout} = useContext(LayoutContext);

    return(
        <nav>
            <ul style={inlineStyle.container}>
                {menu.map((item)=> {
                    return (
                        <li key={item.id} style={inlineStyle.link}>
                            <Link to={item.location}>{item.label}</Link>
                        </li>
                    );
                })}
                
                <li>
                    <button onClick={()=>{ toggleLayout() }}>Toggle Layout</button>
                </li>
            </ul>        
        </nav>
    );
}

export default NavBar;