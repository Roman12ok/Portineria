import { Outlet, Link } from "react-router-dom";

const Navigation = (setLoggedIn) => {
    const styleNavButton = "bg-slate-950 p-3 mx-2 hover:bg-slate-600 text-white rounded"
    console.log(setLoggedIn);
  return (
    <div className='mb-8 flex justify-between'>
        <div>
            <p className="font-bold text-2xl">Ciao! <i>{setLoggedIn.setLoggedIn.username}</i></p>
        </div>
        <div>
            <Link className={styleNavButton} to="/home">HOME</Link>
            <Link className={styleNavButton} to="/assign">ADD BARCODE</Link>
            <Link className={styleNavButton} to="/profile">ADD DRIVE PROFILE</Link>
            <Link className={styleNavButton} to="/">LOGOUT</Link>
            <Outlet />
        </div>
  </div>
  )
}

export default Navigation