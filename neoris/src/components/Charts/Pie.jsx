import React from 'react';
import {List, ListItem } from '@tremor/react';
import Card from '@mui/material/Card';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = [
  {
    id: 'Travel',
    value: 6730,
    label: 'Travel',
    color: '#06B6D4',
  },
  {
    id: 'IT & equipment',
    value: 4120,
    label: 'IT & equipment',
    color: "#3B82F6"
  },
  {
    id: 'Training & development',
    value: 3920,
    label: 'Training & development',
    color: "#6366F1"
  },
  {
    id: 'Office supplies',
    value: 3210,
    label: 'Office supplies',
    color: "#8B5CF6"
  },
  {
    id: 'Communication',
    value: 3010,
    label: 'Communication',
    color: "#D946EF"
  },
];


const currencyFormatter = (number) => {
  return '$' + Intl.NumberFormat('us').format(number).toString();
};

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

export default function Pie() {
  return (
    <Card className="w-full h-full p-3">
      <h3 className="font-medium mb-6">
        Total expenses by category
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
        <PieCenterLabel>$12000</PieCenterLabel>
      </PieChart>
      <p className="mt-8 flex items-center justify-between">
        <span>Category</span>
        <span>Amount / Share</span>
      </p>
      <List className="mt-2">
        {data.map((item) => (
          <ListItem key={item.id} className="space-x-6">
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
            <div className="flex items-center space-x-2">
              <span className="font-medium tabular-nums ">
                {currencyFormatter(item.value)}
              </span>
              <span className=" px-1.5 py-0.5 font-medium tabular-numsd">
                {item.share}
              </span>
            </div>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}