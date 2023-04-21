import { useState } from "react";

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        console.log('username', username);
        console.log('password', password);
        e.preventDefault();

    }
    
    return (
        <>
            <form action="post" onSubmit={onSubmit}>
                <label htmlFor="username">User Name</label> 
                <input type="text" name="username" value={username} onChange = {(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password</label> 
                <input type="password" name="password" value={password} onChange = {(e) => setPassword(e.target.value)} /> <br />
                <button type="submit">Login</button>
            </form>
        </>
    )
}