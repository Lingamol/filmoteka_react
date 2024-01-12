import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li>
          <Link to="me">Information about Me</Link>
        </li>
        <li>
          <Link to="team">Information about Team</Link>
        </li>
      </ul>
      <Suspense fallback={'Loading!'}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default About;
