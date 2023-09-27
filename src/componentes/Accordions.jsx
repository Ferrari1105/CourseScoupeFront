import React from 'react';
import Accordions from 'react-bootstrap/Accordion';

const Accordion = () => {
  return (
    <div>
        <Accordions defaultActiveKey="0">
      <Accordions.Item eventKey="0">
        <Accordions.Header>Titulo 1</Accordions.Header>
        <Accordions.Body>
          Leccion 1
        </Accordions.Body>
        <Accordions.Body>
          Leccion 2
        </Accordions.Body>
        <Accordions.Body>
          Leccion 3
        </Accordions.Body>
      </Accordions.Item>
      <Accordions.Item eventKey="1">
        <Accordions.Header>Titulo 2</Accordions.Header>
        <Accordions.Body>
          Leccion 1
        </Accordions.Body>
        <Accordions.Body>
          Leccion 2
        </Accordions.Body>
        <Accordions.Body>
          Leccion 3
        </Accordions.Body>
      </Accordions.Item>
    </Accordions>
    </div>
  );
}

export default Accordion;
