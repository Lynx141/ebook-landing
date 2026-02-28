import React from 'react';
import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-50">
      <h1 className="text-4xl font-bold text-stone-900 mb-4">404</h1>
      <p className="text-lg text-stone-600 mb-8">Page Not Found</p>
      <a href="/" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Go Home
      </a>
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
