import React from 'react';

export default function MoveTop() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
      <>
        <div id="back-to-top">
          <button className="top" onClick={backToTop}> <i className="ion-ios-arrow-up"></i> </button>
        </div>
      </>
  );
}
