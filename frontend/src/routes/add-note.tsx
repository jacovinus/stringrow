import { Form, redirect, useNavigate } from "react-router-dom";
import { type Note, addNote } from "../api/notes";

export async function action({ request }) {
    const formData = await request.formData();
    const newNote = Object.fromEntries(formData) as Note;
    await addNote(newNote);

    return redirect(`/notes`);
}

export default function AddNote() {
    const navigate = useNavigate();
    return (
        <Form method="post" id="contact-form">
            <p>
                <span> Title</span>
                <input
                    placeholder="Title"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:text-gray-100 dark:border-gray-600 dark:bg-gray-700 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    aria-label="Note title"
                    type="text"
                    name="title"
                    defaultValue={"Note title"}
                />
            </p>

            <label>
                <span>Content</span>
                <textarea
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:text-gray-100 dark:border-gray-600 dark:bg-gray-700 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    name="content"
                    defaultValue={"Note Content"}
                    rows={6}
                />
            </label>
            <p className="my-4">
                <button
                className="text-green-700 hover:text-white border border-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                type="submit">Save</button>
                <button 
                className="text-gray-700 hover:text-white border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                type="button" onClick={() => navigate(-1)}>
                    Cancel
                </button>
            </p>
        </Form>
    );
}
