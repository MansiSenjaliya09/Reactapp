import { connect } from 'react-redux'
import React, { useEffect } from 'react'
;
const mapStateToProps = (state) => {
    return {
      item: state.person.data
    }
  }

 function ApiConnectsaga({item,dispatch}) {
   console.log(item);

   useEffect(()=> {

    dispatch({type: 'User_Req'})

   },[])
    
  return (
    <div>apiconnectsaga use</div>
  )
}

export default connect(mapStateToProps) (ApiConnectsaga)