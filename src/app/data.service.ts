import { Injectable } from "@angular/core";
import { INote } from "./shared/note.module";

@Injectable({
  providedIn: "root"
})
export class DataService {
  notes: INote[] = [];

  getAll(): any[] {
    return this.notes;
  }

  get(id: number) {
    return this.notes[id];
  }

  getById(note: INote) {
    return this.notes.indexOf(note);
  }

  create(note: INote) {
    const notesTotal = this.notes.push(note);
    const index = notesTotal - 1;
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
