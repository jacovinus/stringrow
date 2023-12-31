import {redirect} from 'react-router-dom'
import { deleteNote } from '../api/notes'


export async function action({params}) {
    console.log(params)
    await deleteNote(params.noteId)
    return redirect("/notes")
}