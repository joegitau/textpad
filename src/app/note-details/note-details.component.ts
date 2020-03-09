import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { INote } from "../shared/note.model";
import { DataService } from "../data.service";

@Component({
  selector: "app-note-details",
  templateUrl: "./note-details.component.html",
  styleUrls: ["./note-details.component.scss"]
})
export class NoteDetailsComponent implements OnInit {
  noteForm: FormGroup;
  note: INote;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      body: ["", Validators.required]
    });
  }

  createNote() {
    this.dataService.create(this.noteForm.value);
    this.router.navigateByUrl("/");
    // this.router.navigate(['/'])
    // console.log(this.noteForm);
    // console.log("Saved", JSON.stringify(this.noteForm.value));
  }
}
