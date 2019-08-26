import React from 'react';

import PageHeader from './PageHeader/PageHeader';
import { Content } from './PageStyles';

interface Props {
  children: React.ReactChildren;
}

const Page: React.FC = ({ children }) => (
  <div>
    <PageHeader />
    <Content>
      {children}
    </Content>
  </div>
);

export default Page;
