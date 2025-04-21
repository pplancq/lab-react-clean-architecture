import { createFileRoute } from '@tanstack/react-router';

const DemoPage = () => {
  return <div>Demo Page</div>;
};

export const Route = createFileRoute('/_Layout/demo')({
  component: DemoPage,
});
