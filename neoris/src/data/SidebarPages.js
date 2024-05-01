import React from 'react';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import SchoolIcon from '@mui/icons-material/School';
import ReviewsIcon from '@mui/icons-material/Reviews';

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Inicio',
        icon: <HomeIcon />,
        adminOnly: false,
      },
      {
        name: 'Juego',
        icon: <VideogameAssetIcon />,
        adminOnly: false,
      },
      {
        name: 'Leaderboard',
        icon: <LeaderboardIcon />,
        adminOnly: false,
      },
      {
        name: 'Manejar cursos',
        icon: <SchoolIcon />,
        adminOnly: true,
      },
      {
        name: 'Reseñas de usuarios',
        icon: <ReviewsIcon />,
        adminOnly: true,
      },
    ],
  },

  {
    title: 'Otros',
    links: [
      {
        name: 'Configuraciones',
        icon: <SettingsIcon />,
        adminOnly: false,
      },
      {
        name: 'Ayuda',
        icon: <HelpIcon />,
        adminOnly: false,
      },
    ],
  },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];