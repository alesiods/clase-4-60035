import React from 'react'
import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal'
import Boton from './componentes/Boton/Boton'
import ItemCount from './componentes/ItemCount/ItemCount'
import NavBar from './componentes/NavBar/NavBar'

//El componente principal de mi aplicacion es el componente App

//Componentes 1:
//Definicion: Conjunto de elementos que cumplen una funcion especifica en la Interfaz del Usuario.

//Ventajas de trabajar con componentes:

//Reutilizar codigo
//Favorece la separacion de responsabilidades
//El codigo se vuelve mucho mas facil de entender
//Mejora el rendimiento de nuestra aplicacion

//Caracteristicas principales de los componentes:

//Renderiza un unico elemento
//Pueden recibir props
//pueden tener un estado

//¿que son las props?

//Son objetos que contiene datos que un componente necesita para renderizarse correctamente.
//Estas se envian de forma unidireccional, es decir, de un componente padre a un componente hijo

//como props puedo pasar:
//nativo: string, number, booleanes
//iterables: objetos, arrays
//funciones


//¿Que es el estado?
//es un objeto con contiene informacion del componente que puede cambiar durante la ejecuacion de la Aplicacion


const App = () => {

  const celular= {
    marca: "Samsung",
    precio: 1000000,
  }

  return (
    <>

      <NavBar/>
        {/* <TituloPrincipal saludo="Hola comision" producto={celular}/>
        <Boton texto="comprar"/>
        <Boton texto="eliminar"/> */}
        {/* <ItemCount stock={5}/>
        <ItemCount stock={15}/> */}
        
    </>
  )
}

export default App
