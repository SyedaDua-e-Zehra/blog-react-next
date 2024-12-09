import Image from "next/image";

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>React vs Next.js: Key Differences</title>
        <meta name="description" content="Understand the key differences between React and Next.js with this detailed comparison." />
      </Head>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 flex flex-col items-center py-10">
        <header className="w-full max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
            Difference Between React and Next.js
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            A detailed comparison of React and Next.js to help you choose the right framework for your next project.
          </p>
        </header>

        <main className="w-full max-w-4xl mt-8 bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            1. What is React?
          </h2>
          <p className="mt-4 text-gray-700">
            React is a JavaScript library developed by Facebook for building user interfaces. It is focused solely on the front-end and allows developers to create reusable UI components. However, React by itself does not handle routing, server-side rendering, or other application-level features.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-gray-800">
            2. What is Next.js?
          </h2>
          <p className="mt-4 text-gray-700">
            Next.js is a React-based framework developed by Vercel. It extends React by providing powerful features like server-side rendering (SSR), static site generation (SSG), API routes, and built-in routing. This makes it ideal for building full-fledged web applications.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-gray-800">
            3. Key Differences
          </h2>
          <ul className="list-disc ml-6 mt-4 text-gray-700">
            <li className="mb-2">
              <strong>Rendering:</strong> React supports client-side rendering (CSR) only, while Next.js supports CSR, SSR, and SSG.
            </li>
            <li className="mb-2">
              <strong>Routing:</strong> React requires external libraries like React Router, whereas Next.js has a built-in routing system.
            </li>
            <li className="mb-2">
              <strong>SEO:</strong> Next.js offers better SEO capabilities with server-side rendering, unlike React.
            </li>
            <li className="mb-2">
              <strong>Learning Curve:</strong> React is easier to learn, whereas Next.js requires additional knowledge about SSR and file-based routing.
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-semibold text-gray-800">
            4. When to Use?
          </h2>
          <p className="mt-4 text-gray-700">
            - Use **React** for single-page applications or when you need complete control over the tools and libraries in your project.<br />
            - Use **Next.js** for applications that require server-side rendering, static generation, or SEO optimization.
          </p>
        </main>

        <footer className="w-full max-w-4xl text-center mt-8 text-gray-600">
          <p>
            © 2024 Your Name. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
