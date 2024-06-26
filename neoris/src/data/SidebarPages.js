import React from 'react';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Home',
        icon: <HomeIcon />,
        adminOnly: false,
      },
      {
        name: 'Game',
        icon: <VideogameAssetIcon />,
        adminOnly: false,
      },
      {
        name: 'Leaderboard',
        icon: <LeaderboardIcon />,
        adminOnly: false,
      },
      
    ],
  },

  {
    title: 'Otros',
    links: [
      {
        name: 'Settings',
        icon: <SettingsIcon />,
        adminOnly: false,
      },
      {
        name: 'Help',
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