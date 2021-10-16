import { Component, OnInit } from "@angular/core";
// import { environment } from "../../../environments/environment";
import { product, variant } from "../../shared/interface/product";
import { ProductService } from "../../shared/service/product.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  // API_URL;
  products: Array<product>;
  displayProducts: Array<product> = [];
  limit = 5;
  constructor(private ProductService: ProductService) {
    // this.API_URL = environment.apiURL;
    this.ProductService.getProducts().subscribe((Products) => {
      this.products = Products;
      for (var product in Products) {
        if (
          // this.products[product]["quantity"] &&
          this.displayProducts.length < this.limit &&
          this.isAvailable(Products[product].variants)
        )
          this.displayProducts.push(this.products[product]);
      }
      // console.log(this.displayProducts);
    });
  }
  ngOnInit() {}
  isAvailable(variants: variant[]): boolean {
    var res = false;
    for (var variant in variants) {
      if (variants[variant].quantity > 0) res = true;
    }
    return res;
  }
}
