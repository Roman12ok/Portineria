import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
// import { useParams } from 'react-router-dom';

const AssignTodrivers = () => {

  const initialState = { 
    Nome: "", 
    Barcodes: [{ barcode: "" }],
    Targa: "",
    Client: "",
  };

  const [state, setState] = useState(initialState);
  const { Nome, Barcodes, Targa, Client } = state;
  const [countBarcodes, setCountBarcodes] = useState(0);
  // const { id } = useParams();

  let date = new Date();

  const current_Date = [
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
  ];
  
  const current_Time = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ];
  const handleChangesInInput = (e, index) => {
    const { value } = e.target;
    const truncatedValue = value.slice(0, 10); // Truncate the value to the first 10 characters
    const updatedBarcodes = [...Barcodes];
    updatedBarcodes[index] = 
    { 
      barcode: truncatedValue,
      time: current_Time.toLocaleString(), 
      date: current_Date.toString(),
      profile_autista: {
        nome: Nome, 
        targa: Targa,
        client_info: Client
      }
    };

    if (Array.isArray(Barcodes) && index === Barcodes.length - 1 && value.length >= 10) {
      setCountBarcodes(Barcodes.length);
      updatedBarcodes.push({ barcode: "" });
    }

    setState({ ...state, Barcodes: updatedBarcodes });
    };

    const handleSubmiteAction = async (e) => {
      e.preventDefault();
    
      // Remove duplicates using Set and filter
      const uniqueBarcodes = Barcodes.filter(
        (barcode, index, self) =>
          index === self.findIndex((t) => t.barcode === barcode.barcode)
      );
    
      // Filter out any empty or invalid barcodes
      const filteredBarcodes = uniqueBarcodes.filter(
        ({ barcode }) => barcode.length === 10
      );
      try {
        console.log(filteredBarcodes);
      } catch (err) {
        console.error(err);
      } finally {
        setState(initialState)
      }

    };
    

  return (
    <Box
      component="form"
      method="post"
      sx={{
        width: "80dvw",
        height: "80dvh",
        maxWidth: '100%',
      }}
    >
      <p>{countBarcodes}</p>
      <div className='flex'>
      <TextField
        fullWidth
        sx={{
          margin: 1,
        }}
        label="nome"
        id="Nome"
        value={Nome}
        onChange={(e) => setState({ ...state, Nome: e.target.value })}
      />
      <TextField
        fullWidth
        sx={{
          margin: 1,
        }}
        label="targa"
        id="targa"
        value={Targa}
        onChange={(e) => setState({ ...state, Targa: e.target.value })}
      />
      <TextField
        fullWidth
        sx={{
          margin: 1,
        }}
        label="client"
        id="client"
        value={Client}
        onChange={(e) => setState({ ...state, Client: e.target.value })}
      />
      </div>
      <div className='grid grid-cols-4 gap-1 justify-center'>
      {Barcodes.map((barcodeObject, index) => (
        <TextField
        sx={{
          marginY: 1,
          paddingX: 1,
          width: "100%",

        }}
          key={index}
          fullWidth
          label={`Barcode ${index + 1}`}
          id={`Barcode_${index}`}
          value={barcodeObject.barcode}
          onChange={(e) => handleChangesInInput(e, index)}
        />
      ))}
      </div>
      <Button onClick={handleSubmiteAction}>
        Submit
      </Button>
    </Box>
  );
};

export default AssignTodrivers;
