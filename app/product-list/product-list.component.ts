import { Product } from "./../models/product";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filterData: string = "";
  constructor() {}

  ngOnInit(): void {
    const p1 = new Product("01", "gift set1", 100.12445, true, 5);
    const p2 = new Product("02", "cystal glass", 650.5, false, 4);
    const p3 = new Product("03", "airpods pro", 9900.75, true, 4);
    const p4 = new Product("04", "Apple watch", 15000.75234, true, 3);
    this.products.push(p1, p2, p3, p4);
  }
}
