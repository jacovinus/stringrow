import React from "react";
import ReactDOM from "react-dom/client";
//import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root.tsx";
import Contact from "./routes/contact.tsx";
import Note, { loader as noteLoader } from "./routes/note.tsx";
import Notes from './routes/notes.tsx'
import ErrorPage from "./error-page.tsx";
import { loader as notesLoader } from "./api/notes";
import EditNote, { action as editNoteAction } from "./routes/edit-note.tsx";
import { action as destroyNoteAction} from './routes/destroy-note'
import AddNote, { action as addNoteAction } from "./routes/add-note.tsx";
import Login , {action as loginAction } from  './routes/login'
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: notesLoader,
        errorElement: <ErrorPage />,
      
        children: [
            { index: true,
                path:"notes",
                element: <Notes />,
                loader: notesLoader
  
              },
            {  
                path: "contacts/:contactId",
                element: <Contact />,
            },
          
            {
                path: "notes/:noteId",
                element: <Note />,
                loader: noteLoader,
            },
            {
                path: "notes/:noteId/edit",
                element: <EditNote />,
                loader: noteLoader,
                action: editNoteAction,
            },
            {
                path:'notes/:noteId/destroy',
                action: destroyNoteAction, 
                errorElement: <div>Oops! there was an error!</div>
            },
            {
                path: "notes/add",
                element: <AddNote />,
                action: addNoteAction,
            },
        ],
    },
    {
        path: '/login',
        element:<Login/>,
        action: loginAction
    }
    // {
    //     path:"/auth",
    //     element: <Auth/>
    //     loader: authLoader,
    //     errorElement: <ErrorPage/>,
    //     children: [
    //         {
    //             index:true,
    //             path: "/login",
    //             element: <Login/>,
    //             action: loginAction
    //         }
    //     ]
    // }
    
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
