import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from '../src/component/root.tsx'
import HomePage from './sections/Home/home.tsx';
import AboutUsPage from './sections/AboutUs/aboutus.tsx';
import Shop from './sections/shop/shop.tsx';
import TeamsPage from './sections/teams/teams.tsx';
import LoginPage from './component/login.tsx';
import RegisterPage from './component/register.tsx';
import Ticket from './sections/shop/ticket.tsx';
import Apparel from './sections/shop/apparel.tsx';
import NewsPage from './sections/BarcaNews/news.tsx';
import FormPage from './sections/BarcaNews/form.tsx';
import ContentPage from './sections/BarcaNews/content.tsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/Home", element: <HomePage /> },
      { path: "/About-us", element: <AboutUsPage /> },
      { path: "/Shop", element: <Shop /> },
      { path: "/Teams", element: <TeamsPage /> },
      { path: "/Login", element: <LoginPage /> },
      { path: "/Register", element: <RegisterPage /> },
      { path: "/Ticket", element: <Ticket /> },
      { path: "/Apparel", element: <Apparel /> },
      { path: "/barca-news", element: <NewsPage /> },
      { path: "/form-page", element: <FormPage /> },
      { path: "/content-page", element: <ContentPage /> },
    ],
  },
]);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
