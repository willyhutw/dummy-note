import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { NoteList } from './components/NoteList/NoteList'
import { Content } from './components/Content/Content'
import { rootState, Note } from './types/types'
import { setCurrentNote, updateNote } from './actions/notes'

interface Props {
  notes: Note[];
  currentNote: Note;
  setCurrentNote: (note: Note) => void;
  updateNote: (note: Note) => void;
}

const App = (props: Props) => {
  const [currentNote, updateCurrentNote] = useState(props.currentNote)

  const currentNoteChange = (note: Note) => {
    updateCurrentNote(note)
    props.setCurrentNote(currentNote)
  }

  const currentNoteTitleChange = (title: string) => {
    updateCurrentNote({
      ...currentNote,
      title
    })
    props.setCurrentNote(currentNote)
  }

  return <React.Fragment>
    <Header title="Dummy Note" />
    <div className='contentWrapper'>
      <NoteList
        notes={props.notes}
        handleNoteChange={currentNoteChange}
      />
      <Content
        note={currentNote}
        handleUpdateNote={props.updateNote}
        handleCurrentNoteTitleChange={currentNoteTitleChange}
      />
    </div>
    <Footer />
  </React.Fragment>
}

const mapStateToProps = (state: rootState) => {
  return {
    notes: state.noteStore.notes,
    currentNote: state.noteStore.currentNote
  }
}

const mapDispatchToProps = {
  setCurrentNote,
  updateNote
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
