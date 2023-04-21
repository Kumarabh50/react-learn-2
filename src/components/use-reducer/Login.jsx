import { useReducer, useState } from "react";

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const initialUserState = {username: null, password: null, isAdmin: false}
    const reducer = (userState, action) => {
        switch (action) {
            case 'user':
                return {
                    username, password, isAdmin: false
                }
                break;

            case 'admin':
                return {
                    username, password, isAdmin: true
                }
                break;

            default:
                return userState;
        }
    }

    const [userState, dispatch] = useReducer( reducer, initialUserState)

    const onSubmit = (e) => {
        console.log('username', userState.username);
        console.log('password', userState.password);
        console.log('isAdmin', userState.isAdmin);
        e.preventDefault();

    }

    return (
        <>
        <form action="post" onSubmit={onSubmit}>
                <label htmlFor="username">User Name</label> 
                <input type="text" name="username" value={username} onChange = {(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password</label> 
                <input type="password" name="password" value={password} onChange = {(e) => setPassword(e.target.value)} /> <br />
                <button type="submit" onClick={() => dispatch('user')}>Login</button> <br />
                <button type="submit" onClick={() => dispatch('admin')}>Admin</button>
            </form>
        </>
    )
}