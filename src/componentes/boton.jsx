import Button from 'react-bootstrap/Button';
import React from 'react'

function Boton(props) {
    return (
      <>
        <div className="mb-2">
          <Button variant="primary" size="lg" className='Botones'>
            {props.texto}
          </Button>{' '}
        </div>
      </>
    );
  }
  
  export default Boton;