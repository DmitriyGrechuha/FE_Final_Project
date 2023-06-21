import React from 'react';
import '../../Style/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import JobImg from '../../Image/job.jpg';

function JobCard({ onClick }) {
  const handleUrisChange = (e) => {
    e.preventDefault();
    onClick(e.target.value);
  };
  return (
    <div>
      <Card>
        <Card.Img src={JobImg} />
        <Card.Body>
          <Card.Title>JOB</Card.Title>
        </Card.Body>
        <Button
          onClick={handleUrisChange}
          value={['spotify:playlist:37i9dQZF1DX6VdMW310YC7']}
        >
          {' '}
          PLAY{' '}
        </Button>
      </Card>
    </div>
  );
}

export default JobCard;
