import React from 'react';
import { useSelector } from 'react-redux';
import Chart, { ArgumentAxis, Series, Tooltip, ValueAxis, Label, Legend } from 'devextreme-react/chart';

function customizeTooltip(pointInfo) {
  return {
    html: `<div><div > <b>Date:</b> ${pointInfo.argumentText}</div>
<div><b style="text-transform: capitalize">${pointInfo.points[0].seriesName}:</b> ${pointInfo.points[0].valueText}</div></div>`,
  };
}

const LineChart = props => {
  const state = useSelector(state => state);
  const { correctedData } = state.details;
  return (
    <Chart dataSource={correctedData}>
      <Series
        name={props.values}
        valueField={props.values}
        type="spline"
        color="#3A80BA"
        axis={props.values}
        argumentField="date"
      />
      <ArgumentAxis>
        <Label overlappingBehavior="rotate" rotationAngle={-75} />
      </ArgumentAxis>
      <ValueAxis name={props.values} showZero={true} />
      <Tooltip enabled={true} shared={true} customizeTooltip={customizeTooltip} />
      <Legend verticalAlignment="top" horizontalAlignment="center" visible={false} />
    </Chart>
  );
};

export default LineChart;
