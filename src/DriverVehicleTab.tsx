import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Person from '@material-ui/icons/PersonTwoTone';
import DirectionsBus from '@material-ui/icons/DirectionsBusTwoTone';
import { RouteComponentProps } from '@reach/router';

import DriverList from './DriverList';
import VehicleList from './VehicleList';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default
  }
}));

interface Props {}
const DriverVehicleTabs: FunctionComponent<RouteComponentProps<Props>> = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="vehicle driver navigation"
        >
          <Tab label="Drivers" icon={<Person />} {...a11yProps(0)} />
          <Tab label="Vehicles" icon={<DirectionsBus />} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <DriverList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <VehicleList />
      </TabPanel>
    </div>
  );
};

export default DriverVehicleTabs;
