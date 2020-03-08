import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { INote } from "../shared/note.module";
import { DataService } from "../data.service";

@Component({
  selector: "app-notes-list",
  templateUrl: "./notes-list.component.html",
  styleUrls: ["./notes-list.component.scss"]
})
export class NotesListComponent implements OnInit {
  notes: INote[];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.notes = this.dataService.getAll();
    this.router.navigate(["/"]);
  }
}
