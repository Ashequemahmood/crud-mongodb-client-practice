
import './App.css'

function App() {
  const handleLogIn = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    console.log(user)

    fetch('http://localhost:2000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <>
      
      <h1>CRUD</h1>
      <form onSubmit={handleLogIn}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Log In" />
      </form>
      
    </>
  )
}

export default App
