import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import VehicleCard from './VehicleCard';

import vehicles from './vehicles.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    driverCard: {
      margin: theme.spacing(2, 0)
    }
  })
);

export default function VehicleList() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid>
        {vehicles.vehicles.map(vehicle => (
          <Grid key={vehicle.id} className={classes.driverCard}>
            <VehicleCard vehicleId={vehicle.id} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
