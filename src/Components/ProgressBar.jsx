/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    justifyContent: 'center',
    paddingBottom: '1rem',
  },
}));

export default function ProgressBar({ progress }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="static"
        value={progress}
        size="20rem"
        thickness={1}
      />
    </div>
  );
}
