import RequireAuth from '../RequireAuth-Private/RequireAuth'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Button from './Button';
import Loginfrom1 from './Loginform1';
import Signupform1 from './Signupform1';
import Productrouting from './Productrouting';

function RequireAuthrouting() {
  return (
    <BrowserRouter>

    <Routes>

    <Route path="/" element={<Loginfrom1/>} />
    <Route path="/signup" element={<Signupform1/>} />
    <Route path="/productlist" element={<RequireAuth><Productrouting/>
    
      </RequireAuth>}/>


    </Routes>
{/* 
    <Button><b>This is mydata</b></Button> */}
    </BrowserRouter>
  );
}

export default RequireAuthrouting;