import React from 'react';
import './App.css';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Paper from '@material-ui/core/Paper';
import ProgressBar from './Components/ProgressBar';
import ButtonAppBar from './Components/ButtonAppBar';
import FooterNavigation from './Components/FooterNaviagation';
import CountdownTimer from './Components/CountdownTimer';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: lightBlue[300],
      main: lightBlue[600],
      dark: lightBlue[800],
    },
  },
});

function App() {
  const [currentCountdown, setCurrentCountdown] = React.useState(25);
  const [icon, setIcon] = React.useState(0);
  const [progress, setProgress] = React.useState(100);

  const handleChangeCountdownTime = (time, iconNumber) => {
    setCurrentCountdown(time);
    setIcon(iconNumber);
  };

  const handleProgressChange = newProgress => {
    setProgress(newProgress);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <ButtonAppBar />
      <Paper className="Paper">
        <ProgressBar currentCountdown={currentCountdown} progress={progress} />
        <CountdownTimer
          handleProgressChange={handleProgressChange}
          currentCountdown={currentCountdown}
        />
      </Paper>
      <FooterNavigation
        icon={icon}
        handleChangeCountdownTime={handleChangeCountdownTime}
      />
    </MuiThemeProvider>
  );
}

export default App;
