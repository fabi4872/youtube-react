import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Layout } from './components';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SettingsIcon from '@mui/icons-material/Settings';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

const listItem = [
  {
    id: 1,
    descripcion: 'Reportes',
    componente: <AnalyticsIcon />
  },
  {
    id: 2,
    descripcion: 'Productos',
    componente: <ViewInArIcon />
  },
  {
    id: 3,
    descripcion: 'Pedidos',
    componente: <ListAltIcon />
  },
  {
    id: 4,
    descripcion: 'Entregas',
    componente: <LocalShippingIcon />
  },
  {
    id: 5,
    descripcion: 'Configuración',
    componente: <SettingsIcon />
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout listItem={ listItem }>
      <App />
    </Layout>
  </React.StrictMode>
)
