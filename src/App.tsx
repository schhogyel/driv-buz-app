import React from 'react';
import Container from '@material-ui/core/Container';
import DriverVehicleTab from './DriverVehicleTab';
import { Router } from '@reach/router';
import DriverCard from './DriverCard';
import VehicleCard from './VehicleCard';
import Navbar from './Navbar';

export default function App() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Navbar />
        <Router>
          <DriverVehicleTab path="/" />
          <DriverCard path="driver/:driverId" />
          <VehicleCard path="vehicle/:vehicleId" />
        </Router>
      </Container>
    </React.Fragment>
  );
}
