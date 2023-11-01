import React from "react";

interface User {
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
}

interface UsersPageState {
    loading: boolean;
    users: User[];    
}

function LoadingUsers() {
    return (
        <h2>Loading....</h2>
    );
}

function UsersTable({ users } :{ users: User[] }) {
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

class UsersPage extends React.Component<unknown, UsersPageState> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            users: [],
            loading: false,
        };
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const url = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(url);
        const data: User[] = await response.json();
        this.setState({
            users: data,
            loading: false,
        })
    }

    render() {
        const { users, loading } = this.state;
        return (
            <>
                <h1>Users</h1>

                {loading ? <LoadingUsers /> : <UsersTable users={users} />}
            </>
        );
    }
}

export default UsersPage;