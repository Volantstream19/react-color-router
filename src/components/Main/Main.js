import React from 'react';
import { useParams } from 'react-router-dom';

export default function Main() {
  const { red, green, blue } = useParams();
  return (
    <>
      <div className="main">
        ({red}, {green}, {blue})
      </div>
    </>
  );
}
