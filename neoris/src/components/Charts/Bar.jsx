import  React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const Bar = () => {
  return (
    <div className=' flex flex-col p-4'>
      <h1 className='text-xl font-bold pb-8'>Actividad Semanal</h1>
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
    </div>
  );
}

export default Bar;