import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { LibrosPedidosService } from "src/app/services/libros-pedidos.service";
import { LibroPedido } from "src/app/model/libroPedido.model";

@Component({
  selector: "app-pedidos-activos",
  templateUrl: "./pedidos-activos.component.html",
  styleUrls: ["./pedidos-activos.component.css"]
})
export class PedidosActivosComponent implements OnInit {
  pedidos: LibroPedido[] = [];
  pedido: LibroPedido = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pedidosService: LibrosPedidosService
  ) {}

  ngOnInit() {
    // this.pedidosService
    //   .obtenerPedidos()
    //   // .subscribe(this.cuandoRecibaLosusuarios, this.cuandoFalleLaBusqueda);
    //   .subscribe(
    //     data => {
    //       this.pedidos = LibroPedido.convertToArray(data) as LibroPedido[];
    //       console.log(this.pedidos);
    //     },
    //     error => console.error(error)
    //   );
  }
}
