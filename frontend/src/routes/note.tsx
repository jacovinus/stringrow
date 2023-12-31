import { useLoaderData, Form } from "react-router-dom";
import { getNote, type Note } from "../api/notes";
import Card from "../components/Card";
import Button from "../components/Button";

export async function loader({ params }) {
    const note = await getNote(Number(params.noteId));
    return note;
}

export default function Note() {
    const note = useLoaderData() as Note;

    return (
        <Card className="flex flex-col bg-gray-800 p-4 rounded" id="note">
            <Card.CardHeader className="text-white flex flex-col ">
                <h3 className="text-xl text-bold">{note.title}</h3>
                <div className="flex text-gray-500 space-x-2">
                    <small>
                        <span>Created:{note.created_at as string}</span>
                    </small>
                    <small>
                        <span>Updated: {note.created_at as string}</span>
                    </small>
                </div>
            </Card.CardHeader>
            <Card.CardContent>
                <div className="flex p-4 text-gray-200 bg-gray-700 my-2 rounded">
                    <p>{note.content}</p>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                    }}
                >
                    <Form action="edit">
                        <Button
                            className="bg-gray-700 p-1 px-2 text-white rounded"
                            type="submit"
                        >
                            Edit
                        </Button>
                    </Form>

                    <Form
                        method="post"
                        action="destroy"
                        onSubmit={(e) => {
                            if (
                                !confirm(
                                    "plase confirm you want to delete this record."
                                )
                            ) {
                                e.preventDefault();
                            }
                        }}
                    >
                        <Button
                            className="bg-gray-700 p-1 px-2 text-white rounded"
                            type="submit"
                        >
                            Delete
                        </Button>
                    </Form>
                </div>
            </Card.CardContent>
        </Card>
    );
}
