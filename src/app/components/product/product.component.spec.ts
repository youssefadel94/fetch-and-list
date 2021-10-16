import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductComponent } from "./product.component";

describe("ProductComponent", () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let title: HTMLElement;
  let price: HTMLElement;
  let disc: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    title = fixture.nativeElement.querySelector("#title");
    price = fixture.nativeElement.querySelector("#price");
    disc = fixture.nativeElement.querySelector("#disc");
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should display title after detectChanges()", () => {
    fixture.detectChanges();
    expect(title.textContent).toContain(component.product.title);
  });
  it("should display price after detectChanges()", () => {
    fixture.detectChanges();
    expect(price.textContent).toContain(component.product.price + "");
  });
  it("should display discription after detectChanges()", () => {
    fixture.detectChanges();
    expect(disc.textContent).toContain(component.product.description);
  });
});
