import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Libro } from "../model/libro.model";

@Injectable({
  providedIn: "root"
})
export class LibrosService {
  librosURL = "https://librosapp-dde26.firebaseio.com/libro.json";
  libroURL = "https://librosapp-dde26.firebaseio.com/libro";
  constructor(private http: HttpClient) {}

  nuevoLibro(libro: Libro) {
    let body = JSON.stringify(libro);
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.post(this.librosURL, body, { headers });
  }

  actualizarLibro(libro: Libro, key$: string) {
    let body = JSON.stringify(libro);
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    let url = `${this.libroURL}/${key$}.json`;
    return this.http.put(url, body, { headers });
  }

  obtenerLibro(key$: string) {
    let url = `${this.libroURL}/${key$}.json`;
    return this.http.get(url);
  }

  obtenerLibros() {
    return this.http.get(this.librosURL);
  }

  borrarLibro(key$: string) {
    let url = `${this.libroURL}/${key$}.json`;
    return this.http.delete(url);
  }
  borrarLibroAdm(key$: string) {
    let url = `${this.libroURL}/${key$}.json`;
    return this.http.delete(url);
  }
}
