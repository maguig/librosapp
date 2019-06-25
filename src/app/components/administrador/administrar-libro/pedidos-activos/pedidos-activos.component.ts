import { Component, OnInit } from "@angular/core";
import { LibrosPedidosService } from "src/app/services/libros-pedidos.service";
import { LibroPedido } from "src/app/model/libroPedido.model";

@Component({
  selector: "app-pedidos-activos",
  templateUrl: "./pedidos-activos.component.html",
  styleUrls: ["./pedidos-activos.component.css"]
})
export class PedidosActivosComponent implements OnInit {
  pedidos: LibroPedido[];
  pedidosAceptados: LibroPedido[] = [];

  constructor(private pedidosService: LibrosPedidosService) {}

  ngOnInit() {
    this.pedidosService.obtenerPedidos().subscribe(data => {
      this.pedidos = LibroPedido.convertToArray(data);

      this.pedidos.forEach(pedido => {
        if (pedido.estado === "Aceptado") {
          this.pedidosAceptados.push(pedido);
        }
      });
      this.pedidos = this.pedidosAceptados;
    });
  }

  getColor(pedido: LibroPedido) {
    let fechaHoy = new Date(Date.now());
    let fechaDevolucion = new Date(pedido.fechaDevolucion.toString());
    if (fechaHoy >= fechaDevolucion) {
      return "red";
    }
  }

  insertarDevolucionLibro(pedido: LibroPedido) {
    this.pedidosService.obtenerPedido(pedido.key$).subscribe(data => {
      if (data) {
        pedido.estado = "Devuelto";
        this.pedidosService
          .actualizarPedido(pedido, pedido.key$)
          .subscribe(data => {
            console.log(data);
          });
      }
    });
  }

  verTodos() {
    this.pedidosService.obtenerPedidos().subscribe(
      data => {
        this.pedidos = LibroPedido.convertToArray(data);
      },
      error => console.error(error)
    );
  }
  buscarMorosos() {
    let clientesMorosos = [];
    let fechaHoy = new Date(Date.now());
    let fechaDevolucion: any;
    for (let i = 0; i < this.pedidos.length; i++) {
      let pedido = this.pedidos[i];
      fechaDevolucion = new Date(this.pedidos[i].fechaDevolucion.toString());
      if (fechaHoy >= fechaDevolucion) {
        clientesMorosos.push(pedido);
      }
    }
    this.pedidos = clientesMorosos;
  }
}
