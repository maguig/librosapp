import { Component, OnInit } from "@angular/core";
import { LibrosPedidosService } from "src/app/services/libros-pedidos.service";
import { LibroPedido } from "src/app/model/libroPedido.model";

@Component({
  selector: "app-reservas",
  templateUrl: "./reservas.component.html",
  styleUrls: ["./reservas.component.css"]
})
export class ReservasComponent implements OnInit {
  pedidos: LibroPedido[] = [];
  pedidosConfirmados: LibroPedido[] = [];
  constructor(private pedidosService: LibrosPedidosService) {}
  ngOnInit() {
    this.pedidosService.obtenerPedidos().subscribe(data => {
      this.pedidos = LibroPedido.convertToArray(data);
      this.pedidos.forEach(pedido => {
        if (pedido.estado === "Confirmado") {
          this.pedidosConfirmados.push(pedido);
        }
      });
      this.pedidos = this.pedidosConfirmados;
    });
  }
  pedidoAceptado(pedido: LibroPedido) {
    this.pedidosService.obtenerPedido(pedido.key$).subscribe(data => {
      if (data) {
        pedido.estado = "Aceptado";
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
