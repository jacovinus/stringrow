export type Note = {
    id: number;
    title: string;
    content: string;
    created_at: string | Date;
    updated_at: string | Date;
};

export async function getNotes() {
    return await fetch("/api/notes")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.length) {
                return data;
            } else {
                return [];
            }
        });
}

export async function getNote(id: number) {
    console.log(id);
    return await fetch(`/api/notes/${id}`)
        .then((res) => res.json())
        .then((note) => {
            console.log(note);
            if (note) {
                return note;
            } else {
                return {};
            }
        });
}

export async function updateNote(id: number, data: Note) {
    console.log(data);
    return await fetch(`/api/notes/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
        .then((res) => res)
        .then((data) => data);
}

export async function addNote(data: Note) {
    return await fetch(`/api/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
}

export async function deleteNote(id: number) {
    return await fetch(`/api/notes/${id}`, {
        method: "DELETE",
    });
}

export async function loader() {
    const notes = (await getNotes()) as Note[];
    return { notes };
}
