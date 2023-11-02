import { User } from "../../types/User";
import { Link } from "react-router-dom";
import styles from './Grid.module.css';
import store from "../../redux/store";
import { addUser, removeUser } from "../../redux/actions/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

function UsersGrid({ users } :{ users: User[] }) {
    const [ids, setIds ] = useState(getIds());
    const dispatch = useDispatch();

    function getIds() {
        return store.getState().map(({ id })=> id);
    }

    function handleAdd(user: User) {
        dispatch(addUser(user));
        setIds([
            ...getIds(),
        ]);
    }

    function handleRemove(user: User) {
        dispatch(removeUser(user));
        setIds([
            ...getIds(),
        ]);
    }
    
    return(
        <table className={styles.grid}>
            <thead>
                <tr>
                    <th>Username</th>

                    <th>Name</th>

                    <th>Email</th>
                    
                    <th>Phone</th>

                    <th></th>                                    
                </tr>
            </thead>

            <tbody>
                {users.map((user)=> {
                    return (
                        <tr key={user.id}>
                            <td><Link to={`/posts?userId=${user.id}`}>{user.username}</Link></td>  

                            <td>{user.name}</td>

                            <td>{user.email}</td>

                            <td>{user.phone}</td>

                            <td>
                                {ids.includes(user.id)
                                    ? <button onClick={()=>{handleRemove(user)}}>Remove</button>
                                    : <button onClick={()=>{handleAdd(user)}}>Add</button>
                                }
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>            
    );
}

export default UsersGrid;