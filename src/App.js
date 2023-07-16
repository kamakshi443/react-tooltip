import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      <Tooltip position="top" text="Tooltip content">
        <button>Hover me</button>
      </Tooltip>
    </div>
  );
};

export default App;
