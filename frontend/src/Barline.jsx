// Bargraph.js
import React from 'react';
import { useParams } from 'react-router-dom';
import CanvasJSReact from '@canvasjs/react-charts';
import cardsData from './cardsData.json';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Barline() {
  const { id } = useParams();
  const card = cardsData.find(card => card.id === id);

  if (!card) {
    return <div>Card not found</div>;
  }

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: "Yearly Growth Rate"
    },
    axisY: {
      title: "Bounce Rate",
      //suffix: "%"
    },
    axisX: {
      title: "Week of Year",
      //prefix: "W",
      interval: 2
    },
    data: [
      {
       // type: "line",
        toolTipContent: "Year{x}: {y}%",
        dataPoints: card.Barline.map(dp => ({ x: dp.x, y: dp.y }))
      }
    ]
  };

  return (
    <div>
     
      <CanvasJSChart options={options} />
    </div>
  );
}

export default Barline;
