import {
  Component,
  Renderer2,
  ViewChild,
  ElementRef,
  Input,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "app-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.scss"]
})
export class NoteComponent implements AfterViewInit {
  @Input() title: string;
  @Input() body: string;

  @ViewChild("truncator", { static: false }) truncator: ElementRef<HTMLElement>;
  @ViewChild("noteText", { static: false }) noteText: ElementRef<HTMLElement>;

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
