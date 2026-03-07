import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import { Guitar } from './components/Guitar'
import { db } from './data/db'


function App() {
 /* en este apartado vas dejando toda la lógica*/

const [data, setData] = useState(db)
const [cart, setCart] = useState([])

/* enfoque de escribir la función como tal permite crear funciones más descriptivas */
function  addToCart(item) {
  setCart(prevCart =>[...prevCart, item])
} 

//en el caso que sea una api la que proporciona la data esta sería la opción recomendada
/*useEffect(() =>{
  setData(db)
}, [])
*/




  return (
    <>
    
    <Header/>

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

         {data.map((guitar) => (
             <Guitar 
             key={guitar.id} 
             guitar={guitar} 
             setCart={setCart} 
             cart={cart}
             addToCart={addToCart}
             />
         ))}

           
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
     
    </>
  )
}

export default App
