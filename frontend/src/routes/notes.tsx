import { Link, useLoaderData } from "react-router-dom";
import { Note } from "../api/notes";
import Card from "../components/Card";
import Button from "../components/Button";
import { HeartIcon, ReplyIcon, ShareIcon } from "../icons";
import React from "react";

export default function Notes() {
    const { notes } = useLoaderData() as { notes: Note[] };

    return (
        <>
            {notes?.length > 0 ? (
                notes?.map((note) => (
                    <NoteItem
                        key={note.id}
                        title={note.title}
                        content={note.content}
                        updated_at={note.updated_at}
                        id={String(note.id)}
                    />
                ))
            ) : (
                <div>
                    No notes available,
                    <Link to="add">add a new one</Link>
                </div>
            )}
        </>
    );
}

export type NoteItemProps = {
    title: string;
    content: string;
    updated_at: string | Date;
    id: string
};

export const NoteItem = ({ title,id, content, updated_at }: NoteItemProps) => {
    return (
        <Card
            id="main-content"
            className="rounded-lg bg-card text-card-foreground shadow-sm bg-gray-700"
        >
            <Card.CardHeader className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center space-x-1">
                    <img
                        alt="User avatar"
                        className="w-10 h-10 rounded-full"
                        src="/placeholder.svg?height=40&width=40"
                    />
                    <div>
                        <Link to={id}><h3 className="text-lg font-bold text-green-300">{title}</h3></Link>
                        <p className="text-sm text-gray-500">
                            {String(updated_at)}
                        </p>
                    </div>
                </div>
            </Card.CardHeader>
            <Card.CardContent>
                <p className="text-gray-700 dark:text-gray-300 p-4">{content}</p>
            </Card.CardContent>
            <div className="flex items-center space-x-8 p-4 border-gray-600 border-t">
                <Button
                    type="button"
                    className="flex items-center space-x-2 text-white"
                >
                    <HeartIcon className="w-4 h-4" />
                    <span>Like</span>
                </Button>
                <Button
                    type="button"
                    className="flex items-center space-x-2 text-white"
                >
                    <ReplyIcon className="w-4 h-4" />
                    <span>Comment</span>
                </Button>
                <Button
                    type="button"
                    className="flex items-center space-x-2 text-white"
                >
                    <ShareIcon className="w-4 h-4" />
                    <span>Share</span>
                </Button>
            </div>
        </Card>
    );
};
