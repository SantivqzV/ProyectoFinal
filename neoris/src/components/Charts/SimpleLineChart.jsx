import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'
import { Card } from '@mui/material';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

const SimpleLineChart = () => {
  return (
    <Card className='w-full h-full p-3'>
      <LineChart
        series={[
          { data: uData, label: 'uv' },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
      />
    </Card>
  );
}

export default SimpleLineChart
