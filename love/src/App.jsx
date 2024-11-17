import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { extendTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Routes from './routes';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import HomeIcon from '@mui/icons-material/Home';
import Logo from "./assets/img/logo.png";

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main',
  },
  {
    segment: 'home',
    title: 'Home',
    icon: <HomeIcon />,
    to: '/',
  },
  {
    segment: 'img',
    title: 'Hình Ảnh',
    icon: <InsertPhotoIcon />,
    to: '/img',
  },
  {
    kind: 'divider',
  },
  // {
  //   kind: 'header',
  //   title: 'Analytics',
  // },
  // {
  //   segment: 'reports',
  //   title: 'Reports',
  //   icon: <BarChartIcon />,
  //   children: [
  //     {
  //       segment: 'sales',
  //       title: 'Sales',
  //       icon: <DescriptionIcon />,
  //       to: '/reports/sales',
  //     },
  //     {
  //       segment: 'traffic',
  //       title: 'Traffic',
  //       icon: <DescriptionIcon />,
  //       to: '/reports/traffic',
  //     },
  //   ],
  // },
  // {
  //   segment: 'integrations',
  //   title: 'Integrations',
  //   icon: <LayersIcon />,
  //   to: '/integrations',
  // },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App(props) {
  const { window } = props;
  const demoWindow = window ? window() : undefined;

  return (
    <Router> 
      <AppProvider
        navigation={NAVIGATION}
        theme={demoTheme}
        window={demoWindow}
      >
     <DashboardLayout
  logo={
    <Stack direction="row" alignItems="center" sx={{ display: 'flex', alignItems: 'center' }}>
      <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g mask="url(#a)">
          <path d="M22.74 27.73v-7.6l6.64-3.79v7.6l-6.64 3.79Z" fill="#007FFF"></path>
          <path d="M16.1 23.93v-7.59l6.64 3.8v7.59l-6.65-3.8Z" fill="#39F"></path>
          <path d="m16.1 16.34 6.64-3.8 6.64 3.8-6.64 3.8-6.65-3.8Z" fill="#A5D8FF"></path>
        </g>
      </svg>
      <span className="header-text" style={{ fontSize: '24px', fontWeight: 'bold', color: '#000' }}>
        My Dashboard
      </span>
    </Stack>
  }
  sx={{
    '& .MuiTypography-h6': {
      display: 'none',
    },
  }}
>

          <PageContainer>
           
            <Routes />
          </PageContainer>
        </DashboardLayout>
      </AppProvider>
    </Router>
  );
}

export default App;
