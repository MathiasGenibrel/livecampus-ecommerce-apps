import { Bag, Person } from 'react-bootstrap-icons';

export const Headers = () => {
  return (
    <article className="flex justify-between items-center mx-8 py-4">
      <h1 className="text-3xl">LOGO</h1>
      <section className="flex justify-between items-baseline gap-6">
        <div className="flex gap-2">
          <Person className="text-xl" />
          <span>Account</span>
        </div>
        <Bag className="text-xl" />
      </section>
    </article>
  );
};
