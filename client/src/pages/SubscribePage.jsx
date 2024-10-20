import {useState} from "react";

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username,name}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      alert('registration successful');
    } else {
      alert('registration failed');
    }
  }
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input type="text"
             placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>

      <input type="text"
              placeholder="name"
              value={name}
              onChange={ev => setName(ev.target.value)}/>
              

      <button>Register</button>
    </form>
  );
}