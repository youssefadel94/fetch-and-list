import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  @Input()
  images!: Array<string>;
  img = [];
  // constructor() {}

  ngOnInit() {
    for (var i in this.images) {
      this.img.push({ path: this.images[i] });
    }
  }
}
