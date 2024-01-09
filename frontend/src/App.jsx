import { Login, Routers } from './pages/index'
import { useEffect, useState } from 'react';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [username, setUsername] = useState('roman  34t4'); 

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      setLoggedIn(true);
      const storeUsername = sessionStorage.getItem('username');
      console.log('username', storeUsername);
      setUsername(storeUsername);
    }
  }, []);
  
  console.log(loggedIn, username);
  const handleLogout = () => {
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('username');
    setLoggedIn(false);
    setUsername(null);
  }
  
  return (
    <div id="myBackgroundDiv" className="center-item">
        {loggedIn ? <Routers 
        username={username}
        handleLogout={handleLogout} 
        setLoggedIn={loggedIn} /> : 
        <Login setLoggedIn={setLoggedIn} />}
    </div>
  )
}

export default App