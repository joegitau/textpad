import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BaseComponent } from "./base/base.component";
import { NotesListComponent } from "./notes-list/notes-list.component";
import { NoteDetailsComponent } from "./note-details/note-details.component";

const routes: Routes = [
  {
    path: "",
    component: BaseComponent,
    children: [
      {
        path: "",
        component: NotesListComponent
      },
      {
        path: "create",
        component: NoteDetailsComponent
      },
      {
        path: ":id",
        component: NoteDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
