import React from 'react';

import { ColorRing } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="500"
      width="500"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass="blocks-wrapper"
      colors={['#FF8A16', '#FFB368', '#EEEEEE', 'gray', 'black']}
    />
  );
};

export default Loader;
