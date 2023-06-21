import React from 'react';
import '../../Style/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import RetreatImg from '../../Image/retreat.jpg';

function RetreatCard({ onClick }) {
  const handleUrisChange = (e) => {
    e.preventDefault();
    onClick(e.target.value);
  };
  return (
    <div>
      <Card>
        <Card.Img src={RetreatImg} />
        <Card.Body>
          <Card.Title>RETREAT</Card.Title>
        </Card.Body>
        <Button
          onClick={handleUrisChange}
          value={['spotify:playlist:37i9dQZF1DX4sWSpwq3LiO']}
        >
          {' '}
          PLAY{' '}
        </Button>
      </Card>
    </div>
  );
}

export default RetreatCard;
