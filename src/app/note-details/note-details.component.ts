import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { INote } from "../shared/note.module";
import { DataService } from "../data.service";

@Component({
  selector: "app-note-details",
  templateUrl: "./note-details.component.html",
  styleUrls: ["./note-details.component.scss"]
})
export class NoteDetailsComponent implements OnInit {
  noteForm: FormGroup;
  note: INote;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      noteTitle: ["", [Validators.required, Validators.minLength(3)]],
      noteBody: ["", Validators.required]
    });
  }

  createNote() {
    this.dataService.create(this.noteForm.value);

    console.log(this.noteForm);
    console.log("Saved", JSON.stringify(this.noteForm.value));
  }
}
