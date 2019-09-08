import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import DriverCard from './DriverCard';

import drivers from './drivers.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    driverCard: {
      margin: theme.spacing(2, 0)
    }
  })
);

export default function DriverList() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid>
        {drivers.drivers.map(driver => (
          <Grid key={driver.id} className={classes.driverCard}>
            <DriverCard driverId={driver.id} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
