import React from 'react';

import Directory from '../../components/directory/directory.component';

import '../../pages/homepage/homepage.styles.scss'
import HomeProduct from './HomeProduct';

const HomePage = () => (
  <div className='homepage'>
    <Directory />
   <HomeProduct/>
  </div>
);

export default HomePage;