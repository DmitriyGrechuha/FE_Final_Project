import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardGroup } from 'react-bootstrap';
import Header from './components/Header';
import SpotifyPlayer from 'react-spotify-web-playback';
import BikeCard from './components/Card/BikeCard';
import JobCard from './components/Card/JobCard';
import PartyCard from './components/Card/PartyCard';
import RelaxCard from './components/Card/RelaxCard';
import RetreatCard from './components/Card/RetreatCard';
import SportCard from './components/Card/SportCard';

function App() {
  const [uris, setUris] = useState([]);
  const handleUrisChange = (value) => {
    setUris(value);
  };
  return (
    <div className="App">
      <div className="Main">
        <Header />
        <div className="Footer">
          <CardGroup>
            <BikeCard onClick={handleUrisChange} />
            <JobCard onClick={handleUrisChange} />
            <PartyCard onClick={handleUrisChange} />
            <RelaxCard onClick={handleUrisChange} />
            <RetreatCard onClick={handleUrisChange} />
            <SportCard onClick={handleUrisChange} />
          </CardGroup>
          <SpotifyPlayer
            token={
              'BQDV6iD6jdTcJV5NaeK86RAFbCNITAfIscz_C5bc06TjU0JEGIWW-CQUR87-q_z60-z0ssIoCxpT8sbuIFcf6OhjYX1Isg8T1SGW7JXzypYbCZq8P-4UglJvM7cX32kinlFm3oPDhsjSeUHCyzCy-5i7X46aX53GP-ASMJJmxTl0L9oPbKbcBFmpUtmVm6-5mix9IEdfTyKNxwM3-cG9UAm1EBnDnG0G'
            }
            uris={uris}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

// spotify:playlist:37i9dQZF1DX0h2LvJ7ZJ15 (Relax)
// spotify:playlist:37i9dQZF1DX6VdMW310YC7 (Job)
// spotify:playlist:37i9dQZF1DX4sWSpwq3LiO (retreat)
// spotify:playlist:37i9dQZF1DX1qNZsqIInBz (Bike)
// spotify:playlist:37i9dQZF1DWZaiDZ16BA15 (Party)
// spotify:playlist:37i9dQZF1DXdxcBWuJkbcy (Sport)

// ['spotify:playlist:37i9dQZF1DX1qNZsqIInBz']

// 2560, 1920,
// 1440, 1280, 1152, 1024, 800, 768, 640, 425, 375, 320.
