import { User } from "../../types/User";

function UsersGrid({ users } :{ users: User[] }) {
    return(
        <table>
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
                            <td>{username}</td>  

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