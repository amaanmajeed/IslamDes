import React from 'react';
import PageHeader from '../Components/PageHeader';
import Slider from '../Components/Slider';
import allseries from '../Data/allseries.json';

export default function Movies() {
  window.scrollTo(0, 0);
  return (
      <>
        <PageHeader name="Movies"/>
        {allseries.map((data, index) => (
          <Slider key={index} name={data.name} jsonData={data.jsonData} />
        ))}
      </>
  );
}
