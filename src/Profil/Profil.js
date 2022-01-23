import React from 'react';
import PropTypes from 'prop-types';
import image from './avatar.jpg'

const Profil = (props) => {
  return (
   <div className='style'>
     {props.children}
     <h1>FullName:{props.FullName} </h1> 
     <h2>Bio:{props.Bio}</h2>
     <h3>Stage :{props.Stage}</h3>
   </div>
  )
}
Profil.defaultProps = {
  FullName:"Votre nom"

}
// Profil.PropTypes = {
//   FullName:PropTypes.string,
//   Bio : PropTypes.string
  
// }
export default Profil


