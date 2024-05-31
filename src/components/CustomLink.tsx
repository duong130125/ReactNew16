
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function CustomLink() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () => {
    if (location.pathname === '/home-page') {
      navigate('/home-page');
    } else {
      navigate('/not-found');
    }
  };

  return (
    <div>
      <Link to='home-page' onClick={handleNavigation}>Go to Home Page</Link>
    </div>
  );
}
