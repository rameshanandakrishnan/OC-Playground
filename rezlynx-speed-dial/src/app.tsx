import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { ClientProps, GetData } from './types';

import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';

interface AppProps extends ClientProps {
  getData: GetData;
}

const actions = [
  { icon: <CallMadeIcon />, name: 'Check Out', link: 'https://en.wikipedia.org/wiki/Main_Page' },
  { icon: <CallReceivedIcon />, name: 'Check In', link: 'https://www.website.com/' },
];

const useStyles = makeStyles(() => ({
  iframe: {
    display: 'flex',
    height: '100%',
  },
}));

const App: React.FC<AppProps> = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [link, setLink] = React.useState('');

  const handleSpeedDialSelection = (link: string) => {
    console.log('link', link);
    setOpen(true);
    setLink(link);
  };

  return (
    <>
      <SpeedDial
        ariaLabel='SpeedDial basic example'
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleSpeedDialSelection(action.link)}
          />
        ))}
      </SpeedDial>
      <Drawer
        anchor='right'
        open={open}
        PaperProps={{ sx: { width: '80vw', minWidth: '300px' } }}
        onClose={() => {
          setOpen(false);
        }}>
        <iframe title='multi' className={classes.iframe} src={link} />
      </Drawer>
    </>
  );
};

export default App;
