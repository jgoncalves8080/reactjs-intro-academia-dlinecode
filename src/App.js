import { useState, useEffect } from 'react';
import Banner from './components/banner';
import { Header } from './components/header';

function App() {
  const [username, setUsername] = useState('Felisberto');
  const [company, setCompany] = useState('Dline-Code');
  const [count, setCount] = useState(0);

  const handleChangeUsername = (event) => setUsername(event.target.value);

  const handleChangeCompany = (event) => setCompany(event.target.value);

  const handleChangeCount = (type = 'increment') => {
    if (type === 'decrement') {
      setCount(count - 1);
      return;
    }
    setCount(count + 1);
  };

  const handleSubmit = () => {
    const data = {
      username,
      company,
    };
    console.log('data=>', data);
  };

  return (
    <>
      <Header username={username} />
      <Banner company={company} />
      <h1>Contador: {count}</h1>
      <br />
      <button onClick={() => handleChangeCount('increment')}>
        Incrementar
      </button>
      <button onClick={() => handleChangeCount('decrement')}>
        Decrementar
      </button>

      <br />
      <br />
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChangeUsername}
        />
        <br /> <br />
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          onChange={handleChangeCompany}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
