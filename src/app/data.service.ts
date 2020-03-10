import { Injectable } from "@angular/core";

import { Note } from "./shared/note.model";

@Injectable({
  providedIn: "root"
})
export class DataService {
  notes: Note[] = [];

  constructor() {}

  getAll() {
    return this.notes;
  }

  get(id: number) {
    return this.notes[id];
  }

  getId(note: Note) {
    return this.notes.indexOf(note);
  }

  create(note: Note) {
    const notesLength = this.notes.push(note);
    const index = notesLength - 1;
    return index;
  }

  update(id: number, title: string, body: string) {
    const note = this.notes[id];
    note.title = title;
    note.body = body;
  }

  delete(id: number) {
    this.notes.splice(id, 1);
  }
}
