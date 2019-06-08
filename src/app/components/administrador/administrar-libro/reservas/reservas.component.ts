import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { LibrosPedidosService } from "src/app/services/libros-pedidos.service";
import { LibroPedido } from "src/app/model/libroPedido.model";

@Component({
  selector: "app-reservas",
  templateUrl: "./reservas.component.html",
  styleUrls: ["./reservas.component.css"]
})
export class ReservasComponent implements OnInit {
  pedidos: LibroPedido[] = [];
  pedido: LibroPedido = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pedidosService: LibrosPedidosService
  ) {}
  ngOnInit() {
    this.pedidosService.obtenerPedidos().subscribe(
      data => {
        this.pedidos = LibroPedido.convertToArray(data);
      },
      error => console.error(error)
    );
  }
  pedidoAceptado(pedido: LibroPedido) {
    this.pedidosService.obtenerPedido(pedido.key$).subscribe(data => {
      if (data) {
        pedido.estado = "aceptado";
        this.pedidosService
          .actualizarPedido(pedido, pedido.key$)
          .subscribe(data => {
            console.log(data);
          });
      }
    });
  }
  pedidoRechazado(pedido: LibroPedido) {
    this.pedidosService.obtenerPedido(pedido.key$).subscribe(data => {
      if (data) {
        pedido.estado = "rechazado";
        this.pedidosService
          .actualizarPedido(pedido, pedido.key$)
          .subscribe(data => {
            console.log(data);
          });
      }
    });
  }
}
