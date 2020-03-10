import { Component, OnInit } from "@angular/core";
import { Note } from "../shared/note.model";
import { DataService } from "../data.service";

@Component({
  selector: "app-notes-list",
  templateUrl: "./notes-list.component.html",
  styleUrls: ["./notes-list.component.scss"]
})
export class NotesListComponent implements OnInit {
  notes: Note[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.notes = this.dataService.getAll();
  }
}
