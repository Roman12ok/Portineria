import dpwlog_logo from '../../assets/images/dpwlog.svg';
import { useState } from 'react';
import axios from 'axios';

const Login = ({ setLoggedIn }) => {
  const [auth, setAuth] = useState({
    username: '',
    password: '',
  });

  const handleAuthentication = async (e) => {
    e.preventDefault();
    setAuth({ ...auth });
    console.log(auth);
    try {
      const response = await axios.post(`http://barcodesbydriver/api/activeDirectory/`, auth);
      if (response.status === 'Authentication_successful') {
        console.log(response.status);
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('username', auth.username);
        setLoggedIn(true);
      }
    } catch (error) {
      console.log(error.message);
      setAuth(error);
    }
  };

  return (
    <div className="bg-white w-auto md:w-auto lg:w-1/4 h-auto m-auto rounded-xl p-14">
      <div className="flex justify-between item-center">
        <span className='w-1/6'>
          <img src={dpwlog_logo} alt="dp world logo" />
        </span>
        <span className='w-1/6'>
          <img src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsystematic.one%2Fwp-content%2Fuploads%2F2022%2F01%2FPalletways_Logo_470px.png&f=1&nofb=1&ipt=c3e46bbb125621ec4031f36388ff2f9cf202c1b5537743601c86de21681f0c15&ipo=images"} alt="dp world logo" />
        </span>
      </div>
      <div>
        <p className="text-center font-bold">Accedere al tuo account</p>
      </div>
      <div>
        <form method="post">
          <div>
            <input
              id="username"
              className="login-input"
              type="text"
              placeholder="Nome utente PC"
              autoComplete="username"
              autoFocus
              onChange={(e) => setAuth({ ...auth, username: e.target.value })}
            />
            <p className='text-[0.70rem]'>Esempio: nome_congome</p>
          </div>
          <div>
            <input
              id="password"
              className="login-input"
              type="password"
              placeholder="password pc"
              autoComplete="current-password"
              onChange={(e) => setAuth({ ...auth, password: e.target.value })}
            />
            <p className='text-[0.70rem]'>Utilizzare la password del computer</p>
          </div>
          <button className="login-btn" onClick={handleAuthentication} type="submit">Login</button>
        </form>
      </div>
      {/* <a href="https://google.com">wvweewv</a> */}
    </div>
  );
};

export default Login;
