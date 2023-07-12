import React, { useEffect } from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
      item: state.person.data
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      getData: () => dispatch({type: 'User_Req'})
          
    }
  }

 function ApiConnectsaga2({item,getData}) {

    useEffect(()=> {

        getData();
    
       },[])
  return (
    <div>apiconnectsaga2 data</div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps) ( ApiConnectsaga2);