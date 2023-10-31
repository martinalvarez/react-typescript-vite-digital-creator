import { Link } from "react-router-dom";

const inlineStyle = {
    container: {
        display: 'flex',
        listStyle: 'none',
    },
    link: {
        marginRight: '1rem',
    }
};

function NavBar() {
    return(
        <>
            <ul style={inlineStyle.container}>
                <li style={inlineStyle.link}><Link to='/albums'>Albumes</Link></li>
                
                <li style={inlineStyle.link}><Link to='/about'>About</Link></li>
            </ul>        
        </>
    );
}

export default NavBar;