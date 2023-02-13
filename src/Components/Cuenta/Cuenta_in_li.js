import { useEffect, useState } from "react";

function Cuenta_in(){
     
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('')
    
    const getName = () => {
        return sessionStorage.getItem('Name')
    }
    
    const getLastname = () => {
        return sessionStorage.getItem('Lastname')
    }
    
    useEffect(() => {
         setName(getName())
         setLastname(getLastname())
    }, [])

    return(
        <div className="cuenta_publi"><div></div><p>{name + ' ' + lastname}</p></div>
    )
}

export default Cuenta_in