import { Component, OnInit } from "@angular/core";
// import { environment } from "../../../environments/environment";
import { product } from "../../shared/interface/product";
import { ProductService } from "../../shared/service/product.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  products: Array<product>;
  displayProducts: Array<product> = [];
  limit = 5;

  constructor(private ProductService: ProductService) {
    this.ProductService.getProducts().subscribe((Products) => {
      this.products = Products;
      this.displayProducts = this.ProductService.getDisplayProducts(
        Products,
        this.limit
      );
    });
  }

  ngOnInit() {}
}
