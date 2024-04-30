import React, { useEffect, useState } from 'react';
import { List, ListItem } from '@mui/material';
import Card from '@mui/material/Card';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const sizing = {
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  width: 200,
  height: 200,
  legend: { hidden: true },
};

export default function Pie({ cursosPopulares }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const formattedData = cursosPopulares.map((curso) => ({
      id: curso.tema,
      value: curso.veces_completadas,
      label: curso.tema,
      color: '#' + Math.floor(Math.random()*16777215).toString(16), // generates a random color
    }));
    setData(formattedData);
  }, [cursosPopulares]);

  return (
    <Card className="w-full h-full p-3">
      <h3 className="font-medium mb-6">
        Cursos Finalizados Por Tema
      </h3>
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            innerRadius: 70
          },
        ]} {...sizing}
        height={200}
        
        className=''
      >
        <PieCenterLabel>{data.reduce((total, item) => total + item.value, 0)}</PieCenterLabel>
      </PieChart>
      <div className="flex flex-col justify-between">
        <p className="mt-8 flex items-center justify-between">
          <span>Tema</span>
          <span>Veces completado</span>
        </p>
        <List className="mt-2">
          {data.map((item) => (
            <ListItem key={item.id} className="flex">
              <div className="flex items-center space-x-2.5 truncate">
                <span
                  style={{ backgroundColor: item.color }}
                  className={classNames(
                    'h-2.5 w-2.5 shrink-0 rounded-sm',
                  )}
                  aria-hidden={true}
                />
                <span className="truncate">
                  {item.id}
                </span>
              </div>
              <div className="ml-auto mr-4">
                <span className="font-medium tabular-nums ">
                  {item.value}
                </span>
              </div>
            </ListItem>
          ))}
        </List>
      </div>
    </Card>
  );
}