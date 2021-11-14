import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Drawer from '@mui/material/Drawer';
import MuiSpeedDial from '@mui/material/SpeedDial';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';

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

const SpeedDial: React.FC = () => {
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
      <MuiSpeedDial
        ariaLabel='SpeedDial basic example'
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<FlashOnIcon />}>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleSpeedDialSelection(action.link)}
          />
        ))}
      </MuiSpeedDial>
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

export default SpeedDial;
