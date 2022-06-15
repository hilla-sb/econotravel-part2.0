import { ListItem } from '@mui/material';
import { render } from '@testing-library/react';
import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import detalle from '../experiencias.json';
import { UseFetch } from './UseFetch';

//import Card from 'react-bootstrap/Card';
//import { Button } from 'react-bootstrap';

export default function Detalle () {
  
    // render(
    //   {
    //     let items = this.state.items;
    //     if(this.state.filte){
    //       items= items.filter(item =>
    //         item.name.toLowerCase()
    //         .includes(this.state.filter.toLowerCase()))
    //     }
    //   }
    // )



  return(
    <div>
      {/* {
        items.map
      } */}
    </div>
  )
  
}


//let detalleExpereincia = detalle;


// return detalleExpereincia.map((el, i) => (
//   <div key={el.id} className="detalle">

//     <h1>{el.name}</h1>
//     <img alt="experience" width={"400px"} src={el.img} />
//     <p>{el.descripcion}</p>
//     <p>{el.precio}</p>
//   </div>
// ))







// const {data, error, loading} = UseFetch('http://localhost:3000/catalogo')

// if(loading){
//   return<h2>Loading...</h2>
// }
// if(error !== ''){
//   return <h2>{error}</h2>
// }

// return(
//   <div>
//     <h1>Detalle de la experiencia que has elegido</h1>

//     {
//       data.map(el =>(
//         <h4 key={el.id}>{el.id}</h4>
//       ))
//     }
//   </div>
// ) 

//  let detalleExpereincia = detalle;



      {/* <Navbar/>
       <Breadcrumb>Home. Montaña. Bicicleta.</Breadcrumb> 

      <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Montaña</Breadcrumb.Item>
          <Breadcrumb.Item active>Bicicleta</Breadcrumb.Item>
      </Breadcrumb>

      
      <h1>Paseo en bicicleta por el Montseny</h1>
      <img src="" alt=""/>
      <p>Descripción de la actividad</p>
      <p>Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natural del Montseny.</p> */}
      {/* <Footer/> */}
