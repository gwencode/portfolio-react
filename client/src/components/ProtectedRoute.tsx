import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  admin: string | null;
  children: React.ReactNode;
};

const ProtectedRoute = ({ admin, children }: ProtectedRouteProps) => {
  console.log('admin: ', admin);

  if (!admin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
