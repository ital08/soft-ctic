import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListadoUsuarioComponent } from './components/listado-usuario/listado-usuario.component';
import { AgregarEditarUsuarioComponent } from './components/agregar-editar-usuario/agregar-editar-usuario.component';
import { VerUsuarioComponent } from './components/ver-usuario/ver-usuario.component';
import { ListaProyectosComponent } from './components/lista-proyectos/lista-proyectos.component';
import { ProyectoEditarComponent } from './components/proyecto-editar/proyecto-editar.component';
import { VerProyectoComponent } from './components/ver-proyecto/ver-proyecto.component';

const routes: Routes = [

  { path: '', redirectTo: 'listUsuarios', pathMatch: 'full' },
  { path:'listUsuarios', component: ListadoUsuarioComponent },
  { path:'agregarUsuario', component: AgregarEditarUsuarioComponent },
  { path:'verUsuario/:id', component: VerUsuarioComponent },
  { path:'editarUsuario/:id', component: AgregarEditarUsuarioComponent },

  { path:'listProyectos', component: ListaProyectosComponent },
  { path:'agregarProyecto', component: ProyectoEditarComponent },
  { path:'verProyecto/:id', component: VerProyectoComponent },
  { path:'editarProyecto/:id', component: ProyectoEditarComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
