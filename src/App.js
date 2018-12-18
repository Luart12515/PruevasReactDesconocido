
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {  
    super(props)
    
    this.presionSuper = this.presionSuper.bind(this); //Ejer.. Suma
    
    this.generarAleatorio = this.generarAleatorio.bind(this); //numero aleatorio
    this.state = { //propiedad Ejer..Numero aleatorio
      numero: 'No se ha generado número aleatorio aún', //inicializacion del numero aleatorio
      numeros: []
    }
  }
  render() {

    const siglo=21; //primer parte del ejemplo  
    const persona = { //constnate 
      nombre: 'Juan',
      edad: 34
    }

    const buscadores=['http://www.google.com', //Array
                      'http://www.bing.com',
                      'http://www.yahoo.com'];

    return ( 
        <div className="container" /* INICIO DE LOS COMANDOS JSX*/>
        <div className="">       
          <hr/> {/* Salto de linea*/}
          <p>Estamos en el siglo {siglo}</p> {/* llamada de una constante */}
          <h3>Acceso a un objeto</h3>
          <p>{persona.nombre} tiene {persona.edad} años</p> {/* llamada de una propiedad de objetos */}
          <h3>Llamada a un método</h3>
          <p>Un valor aleatorio llamando a un método.</p>
          {this.retornarAleatorio()}
          <h3>Calculo inmediato de expresiones</h3>
          3 + 3 = {3+3}

          <div /*llamada del array creado */>
            <a href={buscadores[0]}>Google</a><br />
            <a href={buscadores[1]}>Bing</a><br />
            <a href={buscadores[2]}>Yahoo</a><br />                
          </div>

          <div>
            {this.mostrarTitulo('Hola Mundo')}
            {this.mostrarTitulo('Fin?')}
            {this.mostrarTitulo('No esto solo es el inicio')}
                    
          </div>
          <h2>Aun hay un gran camino para llegar a la cima </h2>
          <div>

          <form onSubmit={this.presionSuper}>
            <p>Ingrese primer valor: 
              <input type="number" name="valor1" />
            </p>
            <p>Ingrese segundo valor:
              <input type="number" name="valor2" />
            </p>        
            <p>
              <input type="submit" value="Sumar" />          
            </p>
          </form>

          <div>
            <p>Número aleatorio: {this.state.numero}</p> {/*Generador de numeros aleatorios a traves de un boton  */}
            <button onClick={this.generarAleatorio}>Generar número aleatorio</button>
          </div>

          <div>
            <p>Números aleatorios:</p>
            {this.state.numeros.map(function(num) 
            { return (<p>{num}</p>); }
            )}
            <button onClick={this.generarAleatorios}>Generar números aleatorios</button>
          </div>
        </div>
        </div>
      </div>
      
    );
  }

  generarAleatorios() {
    const vec=new Array(5)
    for(let x=0; x<vec.length; x++)
      vec[x]=Math.trunc(Math.random()*10);
    this.setState( {
      numeros: vec
    })}

  generarAleatorio() {
    const v=Math.trunc(Math.random()*100);
    this.setState( {
      numero: v
    })
  }

  presionSuper(e) { 
    e.preventDefault();
    const v1=parseInt(e.target.valor1.value, 10);
    const v2=parseInt(e.target.valor2.value, 10);
    const suma=v1+v2;
    alert('La Super suma es: ' + suma);
  }
  

  mostrarTitulo(tit) {
    return (<h1>
             {tit}
            </h1>)
  }
  retornarAleatorio() {
    return Math.trunc(Math.random() * 10);
  }
}


export default App;