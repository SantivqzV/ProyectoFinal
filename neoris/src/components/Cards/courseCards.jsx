import Card from '@mui/material/Card';
import React, { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';

const CourseCards = ({totalUsuarios, labelUsuarios, labelCurso, totalNuevosUsuarios, labelNuevosUsuarios, nombreCursoMasPopular}) => {
  const [loading, setLoading] = useState(true);

  const dataTable = [
    {
      label: labelNuevosUsuarios, 
      cantidad_nuevos_usuarios: totalNuevosUsuarios,
      tipo: 'Nuevos Usuarios'
    },
    {
      label: labelUsuarios, 
      cantidad_nuevos_usuarios: totalUsuarios,
      tipo: 'Usuarios'
    },
    {
      label: labelCurso, 
      cantidad_nuevos_usuarios: nombreCursoMasPopular,
      tipo: 'Curso Mas Popular'
    }
  ];

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Clear the timer if the component is unmounted
  }, [totalUsuarios, labelUsuarios, labelCurso, totalNuevosUsuarios, labelNuevosUsuarios, nombreCursoMasPopular]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-10">
        {Array(3).fill().map((_, index) => (
          <Skeleton key={index} variant="rectangular" width={210} height={118} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-10">
      {dataTable.map((item) => (
        <Card key={item.label} className='p-3'>
          <p className="text-base leading-5 font-medium text-gray-500" style={{textTransform: "capitalize"}}>
            {item.tipo} {item.label}
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
};

export default CourseCards;