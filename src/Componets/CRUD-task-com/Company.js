import React,{Fragment} from 'react';
import{Button,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Datacom from './Datacom';
import { Link,useNavigate } from 'react-router-dom';
function Company(){

    let m = useNavigate();
      
    const handleedit = (id,name,price,qty) =>{
       localStorage.getItem('coinname',name);
        localStorage.getItem('price',price);
        localStorage.getItem('price',qty);
        localStorage.getItem('id',id);
    }

const handledelete =(id)=>{
   let index = Datacom.map(function(e){
        return e.id;
    }).indexOf(id);

    Datacom.splice(index,1);
    m('/');
}

    return (
     <Fragment>
        <div style={{margin:"10rem"}}>
            <Table>
                <thead>
                    <tr>
                        <th>coinname</th>
                        <th>price</th>
                        <th>qty</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Datacom && Datacom.length >0 ? Datacom.map((d)=>{
                            return(
                                <tr>
                                    <td>{d.coinname}</td>
                                    <td>{d.price}</td>
                                    <td>{d.qty}</td>
                                    <td>
                                        <Link to={'/edit'}>
                                        <Button onClick={()=>handleedit(d.id,d.coinname,d.price,d.qty)}>edit</Button>
                                        </Link>
                                         &nbsp;
                                        <Button onClick={()=>handledelete(d.id)}>delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "no data "
                    }
                  
                </tbody>
            </Table>
            <br></br>
            <Link  className='d-grid gap-2'  to="/create">
                <Button size='lg'>create </Button>
            </Link>
        </div>
     </Fragment>
    )
}
export default Company;