import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CarouselComponent } from "./components/carousel/carousel.component";
import { ProductComponent } from "./components/product/product.component";
import { ListComponent } from "./components/list/list.component";

import { IvyCarouselModule } from "angular-responsive-carousel";
import { ProductService } from "./shared/service/product.service";

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ProductComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IvyCarouselModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
