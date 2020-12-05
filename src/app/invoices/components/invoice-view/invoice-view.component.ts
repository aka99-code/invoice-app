import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";

import { Invoice } from "../../models/invoice";

@Component({
  selector: "app-invoice-view",
  templateUrl: "./invoice-view.component.html",
  styleUrls: ["./invoice-view.component.css"],
})
export class InvoiceViewComponent implements OnInit {
  invoice: Invoice;
  total: number;
  constructor(
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { invoice: Invoice }) => {
      this.invoice = data.invoice;

      if (
        typeof this.invoice.qty !== "undefined" &&
        typeof this.invoice.rate !== "undefined"
      ) {
        this.total = this.invoice.rate * this.invoice.qty;
      }
      let totaltax;
      if (typeof this.invoice.tax !== "undefined") {
        totaltax = this.invoice.tax / 100;
      }
      this.total += totaltax;
    });
  }

  download(id: string) {
    this.snackbar.open("sorry this feature available soon!", "error", {
      duration: 2000,
    });
    this.router.navigate(["dashboard", "invoices", "id"]);
  }
}
