import React from 'react'
import ReactDOM from 'react-dom/client'

import First from './Component/First/First.jsx';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Book from './Component/Book/Book.jsx';
import BookDetails from './Component/BookDetails/BookDetails.jsx';
import Author from './Component/Author/Author.jsx';
import NewSection from './Component/NewSection/NewSection.jsx';
import Featured from './Featured/Featured.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/",
        element:<First></First> ,
      },
      {
        path:'/about',
        element:<About></About>,
      },
      {
        path:'/book',
        element:<Book></Book>,
        loader:() => fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path:'/book/:bookisbn13',
        element:<BookDetails></BookDetails>,
        loader:({params}) =>fetch(`https://api.itbook.store/1.0/books/${params.bookisbn13}`)
      },
      {
        path:'/contact',
        element:<Contact></Contact>,
      },
      {
        path:'/author',
        element:<Author></Author>
      },
      {
        path:'newsection',
        element:<NewSection></NewSection>
      },
      {
        path:'featured',
        element:<Featured></Featured>
      }

      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
