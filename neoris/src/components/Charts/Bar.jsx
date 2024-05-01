import  React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const Bar = () => {
  return (
    <BarChart
      series={[
        { data: [60,23,13,15,17,19,20], color: "black" },
      ]}
      height={290}
      xAxis={[{ data: ['M', 'T', 'W', 'Th', 'F', 'Sat', 'Sun'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      slotProps={{
        bar: {
          clipPath: `inset(0px round 30px 30px 0px 0px)`,
        },
      }}
    />
  );
}

export default Bar;