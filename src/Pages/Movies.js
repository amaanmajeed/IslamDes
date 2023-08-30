import React from 'react';
import PageHeader from '../Components/PageHeader';
import Slider from '../Components/Slider';

export default function Movies() {
  window.scrollTo(0, 0);
  return (
      <>
        <PageHeader name="Movies"/>
        <Slider />
      </>
  );
}
