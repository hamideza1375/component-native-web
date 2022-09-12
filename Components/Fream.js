import React from 'react';

function Fream(props) {
  return (
    < >
      <iframe style={{flex:1}} {...props} src={props.source.uri} />
    </>
  );
}

export default Fream;

