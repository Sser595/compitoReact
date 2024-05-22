import {useState} from 'react';
export default function Registrazione(){
    const [form, setForm] = useState(false);
    const [status, setStatus] = useState("");
    const [username, setUsername ] = useState("");
    const [password, setPassword] = useState("");
    const [mail, setMail] = useState("");    
    async function signup(){
        const response = await fetch("http://localhost:8080/signup", 
        {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: username,password: password, mail:mail})
        });
        const r = await response.json();
        console.log(r.status);
        if(r.status){
            setStatus(true);
        }
        else{
            setStatus(false);
        }
    }
    function gestisciUsername(e){
        setUsername(e.target.value);
    }
    function gestisciPassword(e){
        setPassword(e.target.value);
    }
    function gestisciMail(e){
        setMail(e.target.value);
    }
    function showForm(){
        setForm(true);
        
    }
    
    return(
         <><h1>Registrazione</h1><button onClick={showForm}>Registrazione</button><br/><br></br>
        {
            form ? 
            <span> <label for="username">Username: </label>
            <input id='username' type='text' value={username} onChange={gestisciUsername} ></input><br/><br/>
            <label for="mail">Mail: </label>
            <input id='mail' type='text' onChange={gestisciMail} value={mail}></input><br/><br/>
            <label for="password">Password: </label>
            <input id='password' type='text' onChange={gestisciPassword} value={password}></input><br></br><br></br>
            <button onClick={signup}>Registrati</button></span> 
            
            : null
        }
        {status ? <p>Registrazione avvenuta con successo</p>: <p>errore nella registrazione</p> }
    
    </>
    )
    
    
    
}
