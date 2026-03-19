import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Pricing } from "./pages/Pricing";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "pricing", element: <Pricing /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);