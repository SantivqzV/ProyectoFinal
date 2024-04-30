import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'
import { Card } from '@mui/material';

const SimpleLineChart = ({ data }) => {
  const xLabels = data.map(item => item.hora_dia);
  const uData = data.map(item => item.cantidad_sesiones);

  return (
    <Card className='w-full h-full p-3'>
      <LineChart
        series={[
          { data: uData, label: 'Cantidad de sesiones por hora del día' },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels, label: "Hora del dia" }]}
      />
    </Card>
  );
}

export default SimpleLineChart
