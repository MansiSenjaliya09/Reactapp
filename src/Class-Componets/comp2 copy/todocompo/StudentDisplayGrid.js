import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';

export default function StudentDisplayGrid(props) {
  console.log(props);
  const columns = [
   {field:'id'},
    { field: 'firstName', headerName: 'First Name', width: 130,
    valueFormatter: (params) => params.value.toLowerCase()
  
  },
    { field: 'lastName', headerName: 'Last Name', width: 330 },
    { field: 'fullname', headerName: 'Last Name', width: 330,
    valueGetter: (params) => { 
      return params.row.firstName + '  ' + params.row.lastName  }
  },
    {
      field: 'address.city',
      headerName: 'City',
      width: 90,
      valueGetter: (params) => { 
        
        //console.log(params);
        return params.row.address.city  }
    },

    {
      field: 'address.state',
      headerName: 'State',
      width: 90,
      valueGetter: (params) => { 
        
        console.log(params);
        return params.row.address.state  }
    },

    {
      field: "delete",
      headerName: "Delete",
      width: 90,
      renderCell: (params) => {

        console.log(params);
         // you will find row info in params
        return (<button onClick={()=>{
          props.myd(params.row.id);
          }}>Delete</button>)
      }
    },

    {
      field: "Edit",
      headerName: "Edit",
      width: 90,
      renderCell: (params) => {

        console.log(params);
         // you will find row info in params
        return (<button onClick={()=>{
          props.t(params.row.id);
          }}>Edit</button>)
      }
    }
    

  
  
  ]

  return (
    <div>StudentDisplayGrid
    <DataGrid
    rows={props.mydata}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5]}
    checkboxSelection
    ></DataGrid>
    </div>
  )
}
