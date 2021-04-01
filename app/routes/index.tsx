import * as React from 'react';
import { useRouteData } from '@remix-run/react';
import type {
  HeadersFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node';

const loader: LoaderFunction = () => {
  const body = JSON.stringify({ message: 'this is awesome 😎' });
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const meta: MetaFunction = () => ({
  title: 'Remix + Tailwind Starter',
  description: 'Welcome to Remix with Tailwind!',
});

const headers: HeadersFunction = () => ({
  'Cache-Control':
    'max-age=600, s-maxage=604800, stale-while-revalidate=604800',
});

const Index: React.VFC = () => {
  const data = useRouteData<{ message: string }>();

  return (
    <div className="p-5 text-center">
      <h2 className="font-medium">Welcome to Remix!</h2>
      <p>
        <a href="https://docs.remix.run">Check out the docs</a> to get
        started.
      </p>
      <p>Message from the loader: {data.message}</p>
    </div>
  );
};

export default Index;
export { headers, loader, meta };
