import React from 'react';
import { authProtected } from '@/utils/auth-protected';
import { DashboardLayout } from '@/components/dashboard';

const dashboard = () => {
  return <DashboardLayout display='apps'>This is dashboard</DashboardLayout>;
};

export default authProtected(dashboard);
