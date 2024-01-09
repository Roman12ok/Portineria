import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import dayjs from 'dayjs';

const Profile = () => {
    const initialState = useState({
        nome: '',
        targa: ''
    })
    const [state, setState] = useState(initialState);
    const { nome, targa } = state;
    const date = dayjs().format("DD/MM/YYYY");   
 
    

    const handleCreationOfDriverProfile = (e) => {
        const { value, id } = e.target;
        setState((prevState) => ({ ...prevState, [id]: value}));
    }

    const addNewDriverProfileToDB = async (e) =>{
        e.preventDefault()
        const data = {nome, targa, date}
        if(!nome || !targa) return
        
        try {
            console.log(data);
        } catch(err) {
            console.log(err)
        } finally {
            setState(initialState[0])
        }
    }


  return (
    <>
    <div className='grid grid-cols-2 gap-4 justify-center'>
        <TextField
        fullWidth
        sx={{
          margin: 1,
        }}
        label="nome del autista"
        id="nome"
        value={nome}
        onChange={handleCreationOfDriverProfile}
      />
        <TextField
        fullWidth
        sx={{
          margin: 1,
        }}
        label="targa del furgone"
        id="targa"
        value={targa}
        onChange={handleCreationOfDriverProfile}
      />
       
    </div>
    <Button
    onClick={addNewDriverProfileToDB}>Aggungi</Button>
    </>
  )
}

export default Profile