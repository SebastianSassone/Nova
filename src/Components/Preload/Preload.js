import { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";

function Preload(){
    const [loading, setLoading ] = useState(false);
    
    useEffect(() => {
        setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 7000)   
        }, [])
return(
<div>
{
               loading ?
        <div className='preload'>
       <div className='preload_text'>
       <h1>NOVA</h1>
       <p>Conectate al infinito</p>
       </div>
        
               <RingLoader
               size={120}
               speedMultiplier={0.6}
               color={'#25133a'}
               loading={loading} 
         />
         <></>
         <p>Cargando...</p>
         </div>:
         <></>}
    </div>
    )
} 

export default Preload