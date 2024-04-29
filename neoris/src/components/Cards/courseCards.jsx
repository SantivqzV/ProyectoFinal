import Card from '@mui/material/Card';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = [
  {
    name: 'Unique visitors',
    stat: '10,450',
    change: '-12.5%',
    changeType: 'negative',
  },
  {
    name: 'Bounce rate',
    stat: '56.1%',
    change: '+1.8%',
    changeType: 'positive',
  },
  {
    name: 'Visit duration',
    stat: '5.2min',
    change: '+19.7%',
    changeType: 'positive',
  },
];

export default function CourseCards() {
  return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-10">
        {data.map((item) => (
          <Card key={item.name} className='p-3'>
            <p className="text-base leading-5 font-medium text-gray-500">
              {item.name}
            </p>
            <div className="mt-2 flex items-baseline space-x-2.5">
              <p className="text-2xl leading-9 font-semibold text-gray-900">
                {item.stat}
              </p>
              <span
                className={classNames(
                  item.changeType === 'positive'
                    ? 'text-emerald-700 dark:text-emerald-500'
                    : 'text-red-700 dark:text-red-500',
                  'text-base leading-5 font-medium',
                )}
              >
                {item.change}
              </span>
            </div>
          </Card>
        ))}
      </div>

  );
}