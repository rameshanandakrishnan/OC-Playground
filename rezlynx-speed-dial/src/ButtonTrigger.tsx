import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import CloseIcon from '@mui/icons-material/Close';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const options = [
  { title: 'Check Out', link: 'https://en.wikipedia.org/wiki/Main_Page' },
  { title: 'Check In', link: 'https://en.wikipedia.org/wiki/Salle_Le_Peletier' },
];

const useStyles = makeStyles(() => ({
  iframe: {
    display: 'flex',
    height: '100%',
    border: 'none',
  },
}));

const ButtonTrigger: React.FC = () => {
  const classes = useStyles();
  const quicAccessIframe = document.getElementById('quicAccessIframe') as HTMLIFrameElement;

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent<Element, Event>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: '40%',
          right: '10px',
          transformOrigin: '100% 100%',
          whiteSpace: 'nowrap',
        }}>
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            whiteSpace: 'nowrap',
          }}>
          <Button
            variant='contained'
            startIcon={<FlashOnIcon />}
            sx={{
              transformOrigin: '100% 100%',
              transform: 'rotate(270deg)',
            }}
            onClick={() => setOpen(true)}>
            Check In/Out
          </Button>
        </Box>
      </Box>

      <Drawer
        anchor='right'
        open={open}
        PaperProps={{
          sx: { width: '100%', maxWidth: '80vw', minWidth: '340px', borderRadius: '10px' },
        }}
        onClose={() => {
          setOpen(false);
        }}>
        <DrawerHeader
          sx={{ flexDirection: 'column', paddingBottom: '14px', background: '#f9f9f9' }}>
          <Box sx={{ display: 'inline-flex', width: '100%' }}>
            <Box flex={1}>
              <IconButton
                color='primary'
                component='span'
                onClick={() => {
                  quicAccessIframe.contentWindow?.history.back();
                }}>
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                color='primary'
                component='span'
                onClick={() => {
                  quicAccessIframe.contentWindow?.history.forward();
                }}>
                <ChevronRightIcon />
              </IconButton>
            </Box>
            <IconButton color='primary' component='span'>
              <CloseIcon onClick={() => setOpen(false)} />
            </IconButton>
          </Box>

          <Box sx={{ alignSelf: 'center' }}>
            <Tabs value={value} onChange={handleChange} aria-label='tabs'>
              <Tab label='Check Out' />
              <Tab label='Check In' />
            </Tabs>
          </Box>
        </DrawerHeader>
        {options[value].link ? (
          <iframe
            id='quicAccessIframe'
            title='multi'
            className={classes.iframe}
            src={options[value]?.link || ''}
          />
        ) : (
          <Typography>Loading</Typography>
        )}
      </Drawer>
    </>
  );
};

export default ButtonTrigger;
