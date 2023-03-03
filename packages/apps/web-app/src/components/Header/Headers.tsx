import { Bag, Person } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export const Headers = () => {
  return (
    <article className="flex justify-between items-center mx-4 py-2">
      <h1 className="text-3xl font-medium">LOGO</h1>
      <section className="flex justify-between items-baseline gap-6">
        <Link className="flex gap-2" to={'/login'}>
          <Person className="text-xl" />
          <span>Account</span>
        </Link>
        <Link to={'/cart'}>
          <Bag className="text-xl" />
        </Link>
      </section>
    </article>
  );
};
