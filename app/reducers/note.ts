import { Note, NoteState } from '../types/types'

interface SetNoteAction {
  type: string;
  payload: Note;
}

interface SetNotesAction {
  type: string;
  payload: Note[];
}

type Action = SetNoteAction | SetNotesAction

const initNotes = [
  {
    id: 1,
    title: 'Get started!',
    body: 'Start taking some notes!'
  }
]

const initialState: NoteState = {
  notes: initNotes,
  currentNote: initNotes[0]
}

export const noteStore = (state = initialState, action: Action): NoteState => {
  switch (action.type) {
    case 'SET_CURRENT_NOTE':
      return {
        ...state,
        currentNote: action.payload as Note
      }
    case 'SET_NOTES':
      return {
        ...state,
        notes: action.payload as Note[]
      }
    default:
      return state
  }
}
