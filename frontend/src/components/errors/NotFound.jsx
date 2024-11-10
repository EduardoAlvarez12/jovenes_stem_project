import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/'), 3000); // Redirigir a inicio luego de 3 segs
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 className='title'>404</h2>
      <p className='paragraph-medium'>Oops! La página que estás buscando no existe.</p>
    </div>
  );
};

export default NotFound;
