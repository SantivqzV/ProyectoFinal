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

/*
    { cantidad_nuevos_usuarios: 3, pais: 'México' },
    { cantidad_nuevos_usuarios: 1, pais: 'Argentina' },
    { cantidad_nuevos_usuarios: 1, pais: 'Mexico' },
    { cantidad_nuevos_usuarios: 1, pais: 'Francia' },
    { cantidad_nuevos_usuarios: 3, pais: 'España' },
    { cantidad_nuevos_usuarios: 1, pais: 'Estados Unidos' }
*/

const CourseCards = ({data}) => {
  console.log(data);
  const nuevosUsuarios = data?.nuevos_usuarios;
  const totalNuevosUsuarios = nuevosUsuarios.reduce((acc, cur) => acc + cur.cantidad_nuevos_usuarios, 0);
  const label = nuevosUsuarios[0].pais ? nuevosUsuarios[0].pais : 'Global';

  const dataTable = [
    {
      label: label, cantidad_nuevos_usuarios: totalNuevosUsuarios
    }
  ];
  return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-10">
        {dataTable.map((item) => (
          <Card key={item.label} className='p-3'>
            <p className="text-base leading-5 font-medium text-gray-500" style={{textTransform: "capitalize"}}>
              Usuarios {item.label}
            </p>
            <div className="mt-2 flex items-baseline space-x-2.5">
              <p className="text-2xl leading-9 font-semibold text-gray-900">
                {item.cantidad_nuevos_usuarios}
              </p>
            </div>
          </Card>
        ))}
      </div>

  );
}

export default CourseCards