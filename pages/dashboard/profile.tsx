import React from 'react';
import { authProtected } from '@/utils/auth-protected';
import { DashboardLayout } from '@/components/index';

const Profile = () => {
  return <DashboardLayout display='profile'>This is Profile</DashboardLayout>;
};

export default authProtected(Profile);
