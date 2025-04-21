import { createFileRoute, Outlet } from '@tanstack/react-router';

const Layout = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export const Route = createFileRoute('/_Layout')({
  component: Layout,
});
