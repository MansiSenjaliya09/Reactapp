import React, { useState } from 'react'
import Button from '@mui/material/Button';
import StudentDisplayGrid from './StudentDisplayGrid';
import StudentFormGrid from './StudentFormGrid';

export default function StudentDataGird() {
    const [open, setOpen] = React.useState(false);
    const [data,setData] = useState([]);
  const [edit,setEdit] = useState(-1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id)=> {
    let my = [...data].filter(y=> {
      return y.id != id;
    })
    setData(my);
  }

  const editValues = (id) => {
    setEdit(id);
    setOpen(true);
  }

  // const [data,setData] = useState([]);
  // const [edit,setEdit] = useState(-1);

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
        <StudentFormGrid  handleClose={handleClose}
          open={open}  data={data}
           setData={setData}
           editID = {edit}
           setEdit={setEdit}
           />
        <StudentDisplayGrid mydata={data} myd = {handleDelete} t={editValues}/>
    </>
  )
}
