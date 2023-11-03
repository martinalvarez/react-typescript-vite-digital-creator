import React from "react";
import { User } from "../types/User";
import { USERS_API } from "../constants/API";
import UsersGrid from "../components/users/Grid";
import Loading from "../components/spinner/Loading";

interface UsersPageState {
    loading: boolean;
    users: User[];    
}

class UsersPage extends React.Component<unknown, UsersPageState> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            users: [],
            loading: true,
        };
    }

    async componentDidMount() {
        const response = await fetch(USERS_API);
        const users: User[] = await response.json();
        this.setState({
            users,
            loading: false,
        })
    }

    render() {
        const { users, loading } = this.state;
        return (
            <>
                <h1>Users</h1>

                {loading ? <Loading /> : <UsersGrid users={users} />}
            </>
        );
    }
}

export default UsersPage;