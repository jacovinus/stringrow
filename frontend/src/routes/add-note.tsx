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
                    aria-label="Note title"
                    type="text"
                    name="title"
                    defaultValue={"Note title"}
                />
            </p>

            <label>
                <span>Content</span>
                <textarea
                    name="content"
                    defaultValue={"Note Content"}
                    rows={6}
                />
            </label>
            <p>
                <button type="submit">Save</button>
                <button type="button" onClick={() => navigate(-1)}>
                    Cancel
                </button>
            </p>
        </Form>
    );
}
