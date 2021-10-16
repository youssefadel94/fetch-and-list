import { Component, Input, OnInit } from "@angular/core";
import { product } from "src/app/shared/interface/product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  @Input()
  product!: product;
  // constructor() {}

  ngOnInit() {}
}
