import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { Note, rootState } from '../types/types'

interface setCurrentNoteResp {
  type: string;
  payload: Note;
}

export const setCurrentNote = (note: Note): setCurrentNoteResp => {
  return {
    type: 'SET_CURRENT_NOTE',
    payload: note
  }
}

const setNotes = (notes: Note[]) => {
  return {
    type: 'SET_NOTES',
    payload: notes
  }
}

export const updateNote = (note: Note) => {
  return async (dispatch: ThunkDispatch<unknown, unknown, AnyAction>, getState: () => rootState): Promise<void> => {
    const state = getState()
    const notes: Note[] = state.noteStore.notes
    for (const n of notes) {
      if (n.id === note.id) {
        n.title = note.title
        n.body = note.body
        break
      }
    }
    dispatch(setNotes(notes))
  }
}
