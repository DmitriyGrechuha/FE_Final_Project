import React from 'react';
import '../../Style/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import SportImg from '../../Image/sport.jpg';

function SportCard ({ onClick }) {
  const handleUrisChange = (e) => {
    onClick(e.target.value);
  };
  return (
    <div>
      <Card>
        <Card.Img src={SportImg} />
        <Card.Body>
          <Card.Title>SPORT</Card.Title>
        </Card.Body>
        <Button onClick={handleUrisChange} value={['spotify:playlist:37i9dQZF1DXdxcBWuJkbcy']}>PLAY</Button>
      </Card>
    </div>
  );
};

export default SportCard;
