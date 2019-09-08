import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontWeight: 400,
      color: theme.palette.text.secondary
    }
  })
);

export default function FormattedVehilceInfo({
  name,
  text
}: {
  name: string | React.ReactElement;
  text: React.ReactElement | string | number | undefined;
}) {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h6" component="span" className={classes.text}>
        {name}:{' '}
      </Typography>
      <Typography variant="h6" component="span">
        {text}
      </Typography>
    </div>
  );
}
