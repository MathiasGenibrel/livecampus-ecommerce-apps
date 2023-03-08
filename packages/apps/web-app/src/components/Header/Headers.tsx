import { BagFill, PersonCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export const Headers = () => {
  return (
    <article className="sticky top-0 flex justify-between items-center px-4 py-2 bg-white z-10">
      <Link to={'/'} title="Home">
        <h1 className="text-3xl font-medium">LOGO</h1>
      </Link>
      <section className="flex justify-between items-center gap-4">
        <Link to={'/login'}>
          <PersonCircle className="text-xl" />
        </Link>
        <Link to={'/cart'}>
          <BagFill className="text-xl" />
        </Link>
      </section>
    </article>
  );
};
