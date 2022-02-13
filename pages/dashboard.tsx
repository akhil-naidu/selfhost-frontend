import React from 'react';
import { authProtected } from '@/utils/auth-protected';

const dashboard = () => {
  return <div>dashboard</div>;
};

export default authProtected(dashboard);
