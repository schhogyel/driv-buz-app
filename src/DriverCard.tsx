import React, { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Person from '@material-ui/icons/PersonTwoTone';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link as RouterLink } from '@reach/router';
import Link from '@material-ui/core/Link';
import { RouteComponentProps } from '@reach/router';

import Map from './Map';
import FormattedVehilceInfo from './FormattedVehicleInfo';
import vehicles from './vehicles.json';
import drivers from './drivers.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    driverInfoContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
      }
    },
    avatar: {
      margin: 10
    },
    card: {
      minWidth: 275
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    },
    driverInfo: {
      marginRight: theme.spacing(10),
      paddingLeft: theme.spacing(2)
    },
    map: {
      flex: 1,
      width: '100%',
      maxWidth: 550
    }
  })
);

interface DriverProps {
  driverId: number;
}

const DriverCard: FunctionComponent<RouteComponentProps<DriverProps>> = ({
  driverId
}) => {
  const classes = useStyles();
  const driver =
    driverId && drivers.drivers.find(driver => driver.id === +driverId);

  const vehicle =
    driverId &&
    vehicles.vehicles.find(vehicle => vehicle.driver_id === +driverId);

  const coordinates = vehicle
    ? { lat: vehicle.latitude, lng: vehicle.longitude }
    : {};

  const addMarkers = (coordinate: any) => (map: any) => {
    new window.google.maps.Marker({
      map,
      position: coordinate
    });
  };

  return (
    <Card className={classes.card}>
      {driver && (
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <Person />
            </Avatar>
          }
          title={
            <Typography variant="h5" component="h2">
              <Link component={RouterLink} to={`/driver/${driver.id}`}>
                {driver.first_name} {driver.last_name}
              </Link>
            </Typography>
          }
        />
      )}
      <CardContent>
        {vehicle ? (
          <React.Fragment>
            <div className={classes.driverInfoContainer}>
              <div className={classes.driverInfo}>
                <FormattedVehilceInfo
                  name="Vehicle"
                  text={
                    <Link component={RouterLink} to={`/vehicle/${vehicle.id}`}>
                      {vehicle && vehicle.name}
                    </Link>
                  }
                />
                <FormattedVehilceInfo
                  name="Capacity"
                  text={vehicle && vehicle.capacity}
                />
                <FormattedVehilceInfo
                  name="Passengers"
                  text={vehicle && vehicle.passengers}
                />
              </div>
              <div className={classes.map}>
                <Map
                  options={{
                    center: coordinates,
                    zoom: 15
                  }}
                  onMount={addMarkers(coordinates)}
                />
              </div>
            </div>
          </React.Fragment>
        ) : (
          <Typography> No vehicle assigned to this driver</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default DriverCard;
