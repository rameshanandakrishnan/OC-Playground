import React from 'react';
import SpeedDial from './SpeedDial';
import ButtonTrigger from './ButtonTrigger';
import { ClientProps, GetData } from './types';

interface AppProps extends ClientProps {
  getData: GetData;
}

const App: React.FC<AppProps> = () => {
  // return <SpeedDial />;
  return <ButtonTrigger />;
};

export default App;
