import { Link } from "react-router-dom";

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
];

function NavBar() {
    return(
        <>
            <ul style={inlineStyle.container}>
                {menu.map((item)=> {
                    return (
                        <li key={item.id} style={inlineStyle.link}>
                            <Link to={item.location}>{item.label}</Link>
                        </li>
                    );
                })}
            </ul>        
        </>
    );
}

export default NavBar;