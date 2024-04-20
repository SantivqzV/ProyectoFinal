import React from 'react';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Home',
        icon: <HomeIcon />,
      },
      {
        name: 'Game',
        icon: <VideogameAssetIcon />,
      },
      {
        name: 'Leaderboard',
        icon: <LeaderboardIcon />,
      },
    ],
  },

  {
    title: 'Others',
    links: [
      {
        name: 'Settings',
        icon: <SettingsIcon />,
      },
      {
        name: 'Account',
        icon: <AccountCircleIcon />,
      },
      {
        name: 'Help',
        icon: <HelpIcon />,
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