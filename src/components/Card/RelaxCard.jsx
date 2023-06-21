import React from 'react';
import '../../Style/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import RelaxImg from '../../Image/relax.jpg';

function RelaxCard({ onClick }) {
  const handleUrisChange = (e) => {
    e.preventDefault();
    onClick(e.target.value);
  };
  return (
    <div>
      <Card>
        <Card.Img src={RelaxImg} />
        <Card.Body>
          <Card.Title>RELAX</Card.Title>
        </Card.Body>
        <Button
          onClick={handleUrisChange}
          value={['spotify:playlist:37i9dQZF1DX0h2LvJ7ZJ15']}
        >
          {' '}
          PLAY{' '}
        </Button>
      </Card>
    </div>
  );
}

export default RelaxCard;
