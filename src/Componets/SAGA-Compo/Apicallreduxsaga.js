import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Apicallreduxsaga() {
  const d = useSelector(y => y.person.data);

  // console.log(d);

  const dic = useDispatch();
  console.log(d);
  useEffect(() => {

    dic({ type: 'User_Req' })
  }, [])
  return (
    <>
      {/* {
        d.map((value) => {
          return (
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                sx={{ height: 130 }}
                image={value.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {value.category}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" color="text.secondary">
                  {value.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">view</Button>
              </CardActions>
            </Card>

          )

        })
      } */}
    </>

    // d.map((d)=>{
    //   return(
    //   <div>
    //   <div className='card' style={{width:"400px"}}>
    //       <img className='card-img-top' src={d?.image} alt='card image'></img>
    //       <div className='card-body'>
    //           <h3 className='card-title'>{d?.title}</h3>
    //           <h4 className='card-description'>{d?.description}</h4>
    //           <p className='card-price'>{d?.price}</p>
    //           <p className='card-text'>{d?.category}</p>   
    //           <a href='#' className='btn btn-primary'>view profile</a>
    //       </div>
    //   </div>
    //   </div>)
    // })


  )
}
