import React from 'react';
// import ReactShadowRoot from 'react-shadow-root';
import styles from './styles.css';

const App = (props) => {
  const [hi, setHi] = React.useState('hi!!');

  console.log('styles', styles);

  return (
    // <ReactShadowRoot>
    <div className={styles.special}>
      <button
        onClick={() => {
          console.log('clicked');
          setHi('bye');
        }}>
        click
      </button>
      <h1>
        {hi} {props.name}
      </h1>
    </div>
    // </ReactShadowRoot>
  );
};

export default App;
