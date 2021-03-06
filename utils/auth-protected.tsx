import { useRouter } from 'next/router';
import { useNhostAuth } from '@nhost/react-auth';

export const authProtected = (Component: any) => {
  return function AuthProtected(props: any) {
    const router = useRouter();
    const { isLoading, isAuthenticated } = useNhostAuth();

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
      router.push('/login');
      return null;
    }

    return <Component {...props} />;
  };
};
