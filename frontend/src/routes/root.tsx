import { Outlet, Link } from "react-router-dom";

import { HomeIcon, InboxIcon, BarChartIcon, SearchIcon, SettingsIcon } from "../icons";

export default function Root() {
   // const { notes } = useLoaderData() as { notes: Note[] };
    return (

        <main className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <aside className="w-64 bg-white dark:bg-gray-800">
          <nav className="mt-6">
            <div>
              <Link className="flex items-center px-6 py-2 text-gray-700 dark:text-gray-200" to="/notes">
                <HomeIcon className="w-4 h-4" />
                <span className="mx-3">Home</span>
              </Link>
              <Link className="flex items-center px-6 py-2 text-gray-700 dark:text-gray-200" to="/notes/add">
                <InboxIcon className="w-4 h-4" />
                <span className="mx-3">Add Note</span>
              </Link>
              <Link className="flex items-center px-6 py-2 text-gray-700 dark:text-gray-200" to="#">
                <BarChartIcon className="w-4 h-4" />
                <span className="mx-3">Analytics</span>
              </Link>
              <Link className="flex items-center px-6 py-2 text-gray-700 dark:text-gray-200" to="#">
                <SettingsIcon className="w-4 h-4" />
                <span className="mx-3">Settings</span>
              </Link>
            </div>
          </nav>
        </aside>
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center justify-between p-6 border-green-800 border-b-2">
            <h2 className="text-xl text-green-500 font-bold"><Link to="/notes">StringRow</Link></h2>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <SearchIcon className="w-4 h-4 text-gray-400" />
              </span>
              <input
                className="pr-6 pl-10 py-2 rounded-lg border-2 focus:outline-none"
                placeholder="Search"
                type="text"
              />
            </div>
          </header>
          <main className="overflow-y-auto p-6">
            <section className="space-y-6">
           <Outlet/>
            </section>
          </main>
        </div>
      </main>
        // <div className="flex flex-1 items-center justify-center min-h-screen py-12 bg-gray-50 dark:bg-gray-900 px-2 sm:px-8 lg:px-12">
        //     <div id="sidebar" className="flex flex-col">
        //         <h1>React Router Contacts</h1>
        //         <div>
        //             <form id="search-form" role="search">
        //                 <input
        //                     id="q"
        //                     aria-label="Search contacts"
        //                     placeholder="Search"
        //                     type="search"
        //                     name="q"
        //                 />
        //                 <div id="search-spinner" aria-hidden hidden={true} />
        //                 <div className="sr-only" aria-live="polite"></div>
        //             </form>
        //             <form method="post">
        //                 <button type="submit">New</button>
        //             </form>
        //         </div>
        //         <nav>
        //             {notes.length ? (
        //                 <ul>
        //                     {notes.map((note: Note) => (
        //                         <li key={note.id}>
        //                             <Link to={`notes/${note.id}`}>
        //                                 {note.title ? (
        //                                     <>
        //                                         {note.title}
        //                                         {note.content}
        //                                     </>
        //                                 ) : (
        //                                     <i>No Name</i>
        //                                 )}{" "}
        //                                 {<span>★</span>}
        //                             </Link>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             ) : (
        //                 <p>
        //                     <i>No Notes</i>
        //                 </p>
        //             )}
        //             <ul>
        //                 <li>
        //                     <Link to={'/notes'}>Show notes</Link>
        //                 </li>
        //                 <li>
        //                     <Link to={'/notes/add'}>+ Add Note</Link>
        //                 </li>
        //             </ul>

        //             <ul>
        //                 <li>
        //                     <Link to={`/contacts/1`}>Your Name</Link>
        //                 </li>
        //                 <li>
        //                     <Link to={`/contacts/2`}>Your Friend</Link>
        //                 </li>
        //             </ul>
        //         </nav>
        //     </div>
        //     <div id="detail">
        //         <Outlet />
        //     </div>
        // </div>
    );
}





