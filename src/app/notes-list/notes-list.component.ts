import { Component, OnInit } from "@angular/core";
import { INote } from "../shared/note.model";
import { DataService } from "../data.service";

@Component({
  selector: "app-notes-list",
  templateUrl: "./notes-list.component.html",
  styleUrls: ["./notes-list.component.scss"]
})
export class NotesListComponent implements OnInit {
  notes: INote[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.notes = this.dataService.getAll();
  }
}
