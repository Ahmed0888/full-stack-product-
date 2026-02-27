import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRole }) => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole');

  useEffect(() => {
    if (!userRole) {
      navigate('/login');
      return;
    }
    
    if (allowedRole && userRole !== allowedRole) {
      if (allowedRole === 'admin') {
        navigate('/');
      } else {
        navigate('/dashboard');
      }
    }
  }, [navigate, userRole, allowedRole]);

  return userRole === allowedRole || !allowedRole ? children : null;
};

export default ProtectedRoute;
