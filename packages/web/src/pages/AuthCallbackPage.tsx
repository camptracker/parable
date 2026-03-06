import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function AuthCallbackPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.get('token');
    if (token) {
      localStorage.setItem('accessToken', token);
    }
    navigate('/', { replace: true });
  }, [params, navigate]);

  return <div className="container"><div className="loading">Signing in...</div></div>;
}
