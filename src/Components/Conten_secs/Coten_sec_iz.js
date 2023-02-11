function Cotent_seciz(){
    function claro(){
    document.getElementById('body').style.backgroundColor = 'white'
    document.getElementById('body').style.color = 'black' 
}
    function oscuro(){
    document.getElementById('body').style.backgroundColor = 'black'
    document.getElementById('body').style.color = 'white'
}
    return(
          <div className="Cotent_seciz"><h3>Iluminacion</h3>
          <div className="botones_iluminacion">
          <button id="claro" onClick={claro} className="boton_iluminacion_diurno">Claro</button>
          <button id="oscuro" onClick={oscuro} className="boton_iluminacion_nocturno">Oscuro</button>
          </div>
          </div>
    )
}

export default Cotent_seciz