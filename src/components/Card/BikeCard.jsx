import React from 'react';
import '../../Style/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import BikeImg from '../../Image/bike.jpg';

function BikeCard({ onClick }) {
  const handleUrisChange = (e) => {
    e.preventDefault();
    onClick(e.target.value);
  };
  return (
    <div>
      <Card>
        <Card.Img src={BikeImg} />
        <Card.Body>
          <Card.Title>BIKE</Card.Title>
        </Card.Body>
        <Button
          onClick={handleUrisChange}
          value={['spotify:playlist:37i9dQZF1DX1qNZsqIInBz']}
        >
          {' '}
          PLAY{' '}
        </Button>
      </Card>
    </div>
  );
}

export default BikeCard;
