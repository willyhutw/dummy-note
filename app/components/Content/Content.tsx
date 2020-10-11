import React, { useState, useEffect } from 'react'
import { Note } from '../../types/types'

interface Props {
  note: Note;
  handleUpdateNote: (note: Note) => void;
  handleCurrentNoteTitleChange: (title: string) => void;
}

export const Content = (props: Props): JSX.Element => {
  const [titleValue, updateTitleValue] = useState(props.note.title)
  const [bodyValue, updateBodyValue] = useState(props.note.body)

  useEffect(() => {
    updateBodyValue(props.note.body)
    updateTitleValue(props.note.title)
  }, [props.note.id])

  const handleBodyChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value
    updateBodyValue(value)
    const note = props.note
    note.body = value
    props.handleUpdateNote(note)
  }

  const handleTitleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value
    updateTitleValue(value)
    const note = props.note
    note.title = value
    props.handleCurrentNoteTitleChange(value)
    props.handleUpdateNote(note)
  }

  return <div className='content'>
    <textarea value={titleValue} onChange={handleTitleChange}></textarea>
    <textarea value={bodyValue} onChange={handleBodyChange}></textarea>
  </div>
}
