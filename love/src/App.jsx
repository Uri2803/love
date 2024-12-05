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
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
        to: '/reports/sales',
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
        to: '/reports/traffic',
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
    to: '/integrations',
  },
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
const BRANDING = {
  title: '🐰 ❤️ 🐹',
  logo: <img src={Logo} alt="Logo" style={{ width: 40, height: 40 }} />,
};

function App(props) {
  const { window } = props;
  const demoWindow = window ? window() : undefined;
  

  return (
    <Router> 
      <AppProvider
        navigation={NAVIGATION}
        theme={demoTheme}
        window={demoWindow}
        branding={BRANDING}
      >
     <DashboardLayout>

          <PageContainer>
           
            <Routes />
          </PageContainer>
        </DashboardLayout>
      </AppProvider>
    </Router>
  );
}

export default App;
