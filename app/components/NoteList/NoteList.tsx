import React from 'react'
import { Note } from '../../types/types'

interface Props {
  notes: Note[];
  handleNoteChange: (note: Note) => void;
}

export const NoteList = (props: Props): JSX.Element => {
  const notes = props.notes.map((n: Note) => {
    return <div className='noteIndex' key={n.id} onClick={() => props.handleNoteChange(n)}>
      {n.title}
    </div>
  })

  return <div className='noteList'>
    {notes}
  </div>
}
