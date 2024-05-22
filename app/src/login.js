import {useState} from 'react';
export default function Login(){
    const [form, setForm] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function showForm(){
        setForm(true);
    }
    async function login(){
    const response = await fetch("http://localhost:8080/login", 
        {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: username,password: password})
        });
        const r = await response.json();
        const token = r.token;
        console.log(token);
        const responseT = await fetch(`http://localhost:8080/user/${token}`);
        const rT = await responseT.json();
        console.log(rT);
    }

    function gestisciUsername(e){
        setUsername(e.target.value);
    }
    function gestisciPassword(e){
        setPassword(e.target.value);
    }


    return <><h1>Login</h1><button onClick={showForm}>Login</button><br/><br></br>
        {
            form ? 
            <span> <label for="username">Username: </label>
            <input onChange={gestisciUsername} value={username} id='username' type='text'></input><br/><br/>
            <label for="password">Password: </label>
            <input onChange={gestisciPassword} value={password} id='password' type='text'></input><br></br><br></br>
            <button onClick={login}>Login</button></span> 
            : null
        }
    
    </>
    
    
    
}

