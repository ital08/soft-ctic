import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private endpoint:String = environment.endPoint;
  private apiurl:string = this.endpoint + "api/Controller/Usuarios/";

  constructor(private http:HttpClient) { }

  getListUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.apiurl}Lista_Usuarios`);
  }
  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiurl}${this.apiurl}${id}`);
  }
  agregar(modelo:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiurl}Ingresar_Usuario`,modelo);
  }
  actualizar(modelo:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.apiurl}Actualizar_Usuario`,modelo);
  }

  eliminar(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiurl}Eliminar_Usuario${id}`);
  }

}
