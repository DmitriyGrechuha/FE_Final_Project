import React from 'react';
import '../../Style/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import PartyImg from '../../Image/party.jpg';

function PartyCard({ onClick }) {
  const handleUrisChange = (e) => {
    e.preventDefault();
    onClick(e.target.value);
  };
  return (
    <div>
      <Card>
        <Card.Img src={PartyImg} />
        <Card.Body>
          <Card.Title>PARTY</Card.Title>
        </Card.Body>
        <Button
          onClick={handleUrisChange}
          value={['spotify:playlist:37i9dQZF1DWZaiDZ16BA15']}
        >
          {' '}
          PLAY{' '}
        </Button>
      </Card>
    </div>
  );
}

export default PartyCard;
