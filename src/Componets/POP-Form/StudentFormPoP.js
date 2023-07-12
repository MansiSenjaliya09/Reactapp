import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react'

export default function StudentFormPoP(props) {

    const[form,setform] = useState({
        firstname:'',
        lastname:'',
        address:{
            city:'',
            state:'',
        }
    })

    const changehandler = (e)=>{
        if(e.target.name.includes('.'))
        {
            let a = {...form,[e.target.name.split(".")[0]]:
            {...form[e.target.name.split(".")[0]],
            [e.target.name.split(".")[1]] :e.target.value}};
            setform(a);
        }
        else
        {
            let a = {...form,[e.target.name]:e.target.value};
            setform(a);
        }
    }

        const handlesave = () =>{
            console.log(form);
            let t =[...props.data];
            t.push(form);

            props.setdata(t);
            props.handleclose();
        }
    
  return (
    <Dialog open={props.open} onclose={props.handleclose}>
        <DialogTitle>student form</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Please fill details
            </DialogContentText>
            <TextField 
            autoFocus
            margin='dense'
            id='fanme'
            label='firstname'
            type='text'
            name='firstname'
            fullWidth variant='standard'
            onChange={changehandler}
           />
            <TextField 
            autoFocus
            margin='dense'
            id='lanme'
            label='lastname'
            type='text'
            name='lastname'
            fullWidth variant='standard'
            onChange={changehandler}
           />
            <TextField 
            autoFocus
            margin='dense'
            id='address.city'
            name='address.city'
            type='email'
            label='city'
            fullWidth variant='standard'
            onChange={changehandler}
           />
            <TextField 
            autoFocus
            margin='dense'
            id='address.state'
            name='address.state'
            type='text'
            label='state'
            fullWidth variant='standard'
            onChange={changehandler}
           /> 
        </DialogContent>
        <DialogActions>
            <Button onClick={handlesave}>save</Button>
            <Button onClick={props.handleclose}>cancle</Button>
        </DialogActions>
    </Dialog>
  )
}
