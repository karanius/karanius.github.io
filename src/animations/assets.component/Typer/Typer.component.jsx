import React from 'react';
import Typical from './index.libray'

const Typer = ({steps}) => {
    return (
      <Typical
        steps={steps}
        loop={Infinity}
        wrapper='b'
      />
    )
}

export default Typer;