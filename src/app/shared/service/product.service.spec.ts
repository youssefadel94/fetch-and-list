import { TestBed } from "@angular/core/testing";
// import { product } from "../interface/product";

import { ProductService } from "./product.service";

describe("ProductService", () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("#getObservableValue should return value from observable", (done: DoneFn) => {
    service.getProducts().subscribe((value) => {
      expect(value.length).toBeGreaterThan(0);
      done();
    });
  });
});
