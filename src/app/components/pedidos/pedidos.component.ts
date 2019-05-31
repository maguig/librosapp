import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Libro } from "../../model/libro.model";
import { LibrosService } from "../../services/libros.service";
import { LibroPedido } from "../../model/libroPedido.model";
import { LibrosPedidosService } from "../../services/libros-pedidos.service";
@Component({
  selector: "app-pedidos",
  templateUrl: "./pedidos.component.html",
  styleUrls: ["./pedidos.component.css"]
})
export class PedidosComponent implements OnInit {
  todosLosLibros: Libro[];
  libros: Libro[];
  libro: any;
  pedido: any;
  constructor(
    private pedidosService: LibrosPedidosService,
    private librosService: LibrosService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {}
}
