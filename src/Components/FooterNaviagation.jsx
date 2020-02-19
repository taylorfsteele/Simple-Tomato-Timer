/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import EmojiFoodBeverageOutlinedIcon from '@material-ui/icons/EmojiFoodBeverageOutlined';
import HotTubOutlinedIcon from '@material-ui/icons/HotTubOutlined';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
});

export default function FooterNavigation({ icon, handleChangeCountdownTime }) {
  const classes = useStyles();
  const footerTimes = [
    {
      label: 'Work',
      icon: <ComputerOutlinedIcon />,
      onClick: () => handleChangeCountdownTime(25, 0),
    },
    {
      label: 'Short Break',
      icon: <EmojiFoodBeverageOutlinedIcon />,
      onClick: () => handleChangeCountdownTime(5, 1),
    },
    {
      label: 'Long Break',
      icon: <HotTubOutlinedIcon />,
      onClick: () => handleChangeCountdownTime(10, 2),
    },
  ];

  return (
    <Paper
      elevation={3}
      style={{
        padding: '20px 0px',
        position: 'fixed',
        left: 0,
        bottom: 0,
        height: '3rem',
        width: '100%',
      }}
    >
      <BottomNavigation value={icon} showLabels className={classes.root}>
        {footerTimes.map(arr => {
          return (
            <BottomNavigationAction
              label={arr.label}
              icon={arr.icon}
              onClick={arr.onClick}
            />
          );
        })}
      </BottomNavigation>
    </Paper>
  );
}
