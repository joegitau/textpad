import {
  Component,
  AfterViewInit,
  Renderer2,
  ViewChild,
  ElementRef,
  Input
} from "@angular/core";

@Component({
  selector: "app-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.scss"]
})
export class NoteComponent implements AfterViewInit {
  @Input("noteTitle") noteTitle: string;
  @Input() noteBody: string;

  @ViewChild("truncator") truncator: ElementRef<HTMLElement>;
  @ViewChild("noteText") noteText: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const style = window.getComputedStyle(this.noteText.nativeElement, null);
    const viewableHeight = parseInt(style.getPropertyValue("height"), 10);

    if (this.noteText.nativeElement.scrollHeight > viewableHeight) {
      this.renderer.setStyle(this.truncator.nativeElement, "display", "block");
    } else {
      this.renderer.setStyle(this.truncator.nativeElement, "display", "none");
    }
  }
}
