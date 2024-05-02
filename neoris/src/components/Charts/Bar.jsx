import  React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const Bar = ({data}) => {
  console.log(data);
  console.log(data.actividadSemanal);

  const mappedData = data.actividadSemanal.map(item => ({
    day: item.dia_semana,
    hours: item.horas_totales
  }));

  console.log(mappedData);

  const sortedHours = mappedData.sort((a,b) => a.day - b.day).map(item => item.hours);

  console.log(sortedHours);
  
  const dayMapping = {
    'M': 'Monday',
    'T': 'Tuesday',
    'W': 'Wednesday',
    'Th': 'Thursday',
    'F': 'Friday',
  };

  const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

  return (
    <div className=' flex flex-col p-4'>
      <h1 className='text-xl font-bold pb-8'>Actividad Semanal</h1>
      <BarChart
        series={[
          { data: sortedHours, color: "black" },
        ]}
        height={290}
        xAxis={[{ data: days, scaleType: 'band' }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        slotProps={{
          bar: {
            clipPath: `inset(0px round 30px 30px 0px 0px)`,
          },
        }}
        tooltip={(data) => (
          <div>
            <h1>{data.value}</h1>
            <p>{dayMapping[days[data.index]]}</p>
          </div>
        )}
      />
    </div>
  );
}

export default Bar;