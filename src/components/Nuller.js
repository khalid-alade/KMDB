import React from 'react';

export default function Nuller(props) {
  return (
    <div style={{ display: props.display }} className='nuller'>
      <h2>No results for your search.</h2>
      <h2>Check your spellings and try again.</h2>
    </div>
  );
}
