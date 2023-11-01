import { User } from "../../types/User";
import { Link } from "react-router-dom";
import styles from './Grid.module.css';

function UsersGrid({ users } :{ users: User[] }) {
    return(
        <table className={styles.grid}>
            <thead>
                <tr>
                    <th>Username</th>

                    <th>Name</th>

                    <th>Email</th>
                    
                    <th>Phone</th>                
                </tr>
            </thead>

            <tbody>
                {users.map(({ email, id, name, phone, username })=> {
                    return (
                        <tr key={id}>
                            <td><Link to={`/posts?userId=${id}`}>{username}</Link></td>  

                            <td>{name}</td>

                            <td>{email}</td>

                            <td>{phone}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>            
    );
}

export default UsersGrid;