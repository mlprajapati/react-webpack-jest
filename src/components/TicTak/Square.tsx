import * as React from 'react';
interface Props {
    value:string,
    onClick?: () => any
}

const Square =(props:Props)=> {
      return (
        <button
          className="square"
          onClick={props.onClick}
        >
          {props.value}
        </button>
      );
  }
  export default Square;