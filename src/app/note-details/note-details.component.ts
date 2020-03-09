import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { INote } from "../shared/note.model";

@Component({
  selector: "app-note-details",
  templateUrl: "./note-details.component.html",
  styleUrls: ["./note-details.component.scss"]
})
export class NoteDetailsComponent implements OnInit {
  noteForm: FormGroup;
  note: INote;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      body: ["", Validators.required]
    });
  }

  createNote() {
    console.log(this.noteForm);
    console.log("Saved", JSON.stringify(this.noteForm.value));
  }
}
