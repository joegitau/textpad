import { Injectable } from "@angular/core";

import { INote } from "./shared/note.model";

@Injectable({
  providedIn: "root"
})
export class DataService {
  notes: INote[] = [];

  constructor() {}

  getAll() {
    return this.notes;
  }

  getId(note: INote) {
    return this.notes.indexOf(note);
  }

  create(note: INote) {
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
