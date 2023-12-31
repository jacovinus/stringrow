import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { type Note, updateNote } from "../api/notes";

export async function action({request, params}){

    const formData = await request.formData();
    const updates = Object.fromEntries(formData) as Note
    await updateNote(params.noteId, updates)
    return redirect(`/notes/${params.noteId}`)


}

export default function EditNote() {
    const note = useLoaderData() as Note;
    const navigate = useNavigate()

    return (
        <Form method="post" id="contact-form">
            <p>
                <span> Title</span>
                <input
                    placeholder="Title"
                    aria-label="Note title"
                    type="text"
                    name="title"
                    defaultValue={note.title}
                />
            </p>

            <label>
                <span>Content</span>
                <textarea name="content" defaultValue={note.content} rows={6} />
            </label>
            <p>
                <button type="submit">Save</button>
                <button
                onClick={()=> navigate(-1)}
                type="button">Cancel</button>
            </p>
        </Form>
    );
}

