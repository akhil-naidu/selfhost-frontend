import React from 'react';
import { authProtected } from '@/utils/auth-protected';
import { DashboardLayout } from '@/components/dashboard';

const Profile = () => {
  return <DashboardLayout display='profile'>This is Profile</DashboardLayout>;
};

export default authProtected(Profile);
