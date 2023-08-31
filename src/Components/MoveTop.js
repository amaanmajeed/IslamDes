import React from 'react';
import { Link } from 'react-router-dom';

export default function MoveTop() {
  return (
      <>
      <div id="back-to-top">
         <a className="top" id="top" to="#top"> <i className="ion-ios-arrow-up"></i> </a>
      </div>
      </>
  );
}
