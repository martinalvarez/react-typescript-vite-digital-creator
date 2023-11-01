import React from "react";
import { User } from "../types/User";
import UsersGrid from "../components/users/Grid";

interface UsersPageState {
    loading: boolean;
    users: User[];    
}

function LoadingUsers() {
    return (
        <h2>Loading....</h2>
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

                {loading ? <LoadingUsers /> : <UsersGrid users={users} />}
            </>
        );
    }
}

export default UsersPage;