import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-notes-list",
  templateUrl: "./notes-list.component.html",
  styleUrls: ["./notes-list.component.scss"]
})
export class NotesListComponent implements OnInit {
  noteTitle = "Some awesome title";
  noteBody = "Go home, think and dont come out till something dope hits u!";

  constructor() {}

  ngOnInit(): void {}
}
