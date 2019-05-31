import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LibroPedido } from "../model/libroPedido.model";

@Injectable({
  providedIn: "root"
})
export class LibrosPedidosService {
  pedidosURL = "https://pedido-38b92.firebaseio.com/pedido.json";
  pedidoURL = "https://pedido-38b92.firebaseio.com/pedido";
  libroPedido: LibroPedido[] = [];
  constructor(private http: HttpClient) {}

  nuevoPedido(pedido: LibroPedido) {
    let body = JSON.stringify(pedido);
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.post(this.pedidosURL, body, { headers });
  }

  actualizarPedido(pedido: LibroPedido, key$: string) {
    let body = JSON.stringify(pedido);
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    let url = `${this.pedidoURL}/${key$}.json`;
    return this.http.put(url, body, { headers });
  }

  obtenerPedido(key$: string) {
    let url = `${this.pedidoURL}/${key$}.json`;
    return this.http.get(url);
  }

  obtenerPedidos() {
    return this.http.get(this.pedidosURL);
  }

  borrarPedido(key$: string) {
    let url = `${this.pedidoURL}/${key$}.json`;
    return this.http.delete(url);
  }
  borrarPedidoAdm(key$: string) {
    let url = `${this.pedidoURL}/${key$}.json`;
    return this.http.delete(url);
  }
}
