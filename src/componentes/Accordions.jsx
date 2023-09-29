import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const CustomAccordion = (props) => {

  return (
    <div>
      <Accordion defaultActiveKey="0"> 
          <Accordion.Item >
            <Accordion.Header>Leccion: {props.num}</Accordion.Header>
            <Accordion.Body>{props.title}</Accordion.Body>
          </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default CustomAccordion;

