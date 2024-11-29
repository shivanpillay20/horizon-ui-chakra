import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from 'react-icons/md';

// Admin Imports

import PatentAnalysisDashboard from 'views/admin/patentAnalysis/PatentAnalysisDashboard';



const routes = [
  
  
  {
    name: 'Patent Analysis',
    layout: '/admin',
    path: '/patent-analysis',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    component: <PatentAnalysisDashboard />,
  },
 
];

export default routes;
