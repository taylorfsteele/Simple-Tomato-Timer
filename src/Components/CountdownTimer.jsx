/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import PauseOutlinedIcon from '@material-ui/icons/PauseOutlined';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function CountdownTimer({
  currentCountdown,
  handleProgressChange,
}) {
  const classes = useStyles();
  const [seconds, setSeconds] = useState(currentCountdown * 60);
  const [paused, setPaused] = useState(true);
  const progress = (seconds / (currentCountdown * 60)) * 100;

  useEffect(() => {
    setSeconds(currentCountdown * 60);
    setPaused(true);
  }, [currentCountdown]);

  useEffect(() => {
    handleProgressChange(progress);
    if (!progress) {
      setPaused(true);
    }
  }, [handleProgressChange, progress]);

  useEffect(() => {
    const int = setInterval(() => {
      if (!paused) {
        setSeconds(s => s - 1);
      }
    }, 1000);
    return () => {
      clearInterval(int);
    };
  }, [paused]);

  function resetTimer() {
    setPaused(true);
    setSeconds(currentCountdown * 60);
  }
  function startTimer() {
    setPaused(false);
    if (!progress) {
      resetTimer();
    }
  }
  function pauseTimer() {
    setPaused(true);
  }

  return (
    <>
      <Typography variant="h3" className="time">
        {`${Math.floor(seconds / 60)}:${`00${seconds % 60}`.slice(-2)}`}
      </Typography>
      <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          onClick={paused ? startTimer : pauseTimer}
          startIcon={paused ? <PlayArrowOutlinedIcon /> : <PauseOutlinedIcon />}
        >
          {paused ? 'Start' : 'Pause'}
        </Button>
        <Button
          variant="contained"
          color="default"
          onClick={resetTimer}
          startIcon={<AutorenewIcon />}
        >
          Reset
        </Button>
      </div>
    </>
  );
}
