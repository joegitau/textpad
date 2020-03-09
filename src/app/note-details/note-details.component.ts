import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";

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
  noteId: number;
  newNote: boolean;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // is it new note or an existing?
    // this.route.paramMap.subscribe( (params: Params) => {
    //   const id = +params.get('id');
    //   this.dataService.get(id);
    // });

    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.note = this.dataService.get(params.id);
        this.noteId = params.id;
        this.newNote = false;
      } else {
        this.newNote = true;
      }
    });

    this.noteForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      body: ["", Validators.required]
    });
  }

  createNote() {
    if (this.newNote) {
      this.dataService.create(this.noteForm.value);
      this.router.navigateByUrl("/");
    } else {
      this.dataService.update(
        this.noteId,
        this.noteForm.value.title,
        this.noteForm.value.body
      );
      this.router.navigateByUrl("/");
    }
  }

  discard() {
    this.router.navigateByUrl("/");
  }
}
