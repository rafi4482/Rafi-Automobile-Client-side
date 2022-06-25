import './Extra.css'
import React from 'react';
import { Accordion } from 'react-bootstrap';

const Extra = () => {
    return (
        <>
        
        
        <div className="align container">
        <h2 >FREQUENTLY ASKED QUESTIONS ABOUT US</h2>
        <Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Is any customization possible?</Accordion.Header>
    <Accordion.Body>
      Yes
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Is there all the models shown in the website?</Accordion.Header>
    <Accordion.Body>
      No we do have more collections so we highly encourage everyone to book an appointment to visit our showroom
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>How to book an appointment?</Accordion.Header>
    <Accordion.Body>
     Just call or email us
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Is there insurance available?</Accordion.Header>
    <Accordion.Body>
     You can contact with your insurance provider
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
            
        </>
    );
};

export default Extra;