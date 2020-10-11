export interface Note {
  id: number;
  title: string;
  body: string;
}

export interface NoteState {
  notes: Note[];
  currentNote: Note;
}

export interface rootState {
  noteStore: NoteState;
}
