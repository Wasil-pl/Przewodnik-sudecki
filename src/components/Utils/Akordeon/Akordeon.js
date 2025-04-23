import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Akordeon.scss'; // Import your custom styles here

const Akordeon = ({ tripData }) => {
  return (
    <Accordion>
      {tripData.map((trip, index) => (
        <Accordion.Item eventKey={index.toString()} key={trip.key}>
          <Accordion.Header as={'h5'}>{trip.title}</Accordion.Header>
          <Accordion.Body>
            <p>{trip.description}</p>
            <ul>
              {trip.places.map((place, i) => (
                <li key={i}>{place}</li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default Akordeon;
