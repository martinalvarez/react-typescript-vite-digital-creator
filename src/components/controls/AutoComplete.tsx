import { ChangeEvent, useEffect, useState } from "react";
import { USERS_API } from "../../constants/API";
import { User } from "../../types/User";
import styles from './AutoComplete.module.css';

function AutoComplete() {

    const [text, setText ] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(()=>{
        async function fetchUsers() {
            const response = await fetch(USERS_API);
            const users: User[] = await response.json();
            setUsers(users);
        }

        fetchUsers();
    }, []);

    function handleOptionClick(userId: number) {
        console.log(userId);

    }

    function handleKeyDown(event) {
        console.log(event);
    }

    function Options() {
        const filteredUsers = users.filter((user)=> {
            return user.name.toLowerCase().includes(text.toLowerCase());
        });

        return (
            <div className={styles.container}
            
            >
                <ul className={styles.list}>
                    {filteredUsers.map((user)=>{
                        return (
                            <li 
                                className={styles.options} 
                                key={user.id}
                                onClick={()=> { handleOptionClick(user.id) }}
                            >
                                {user.name} ({user.username})
                            </li>
                        );
                    })}
                </ul>
            </div>            
        );
    }

    function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setText(value);

        if (value.length > 0) {
            setShowOptions(true);
        } else {
            setShowOptions(false);
        }
    }

    return (
        <>
            <input 
                onChange={(event)=>{ handleOnChange(event) }} 
                onKeyDown={(event)=> { handleKeyDown(event)} }
                type="text"
                value={text}
            />

            { showOptions ? <Options /> : null }
        </>
    );
}

export default AutoComplete;