using cticbackend.data.repositorio.data;
using cticbackend.model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace cticbackend.Controllers
{
    [Route("api/Controller/Usuarios")]
    [ApiController]
    public class usuarioController : Controller
    {
        public readonly interface_data _usuarioRepository;

        public usuarioController(interface_data usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        [HttpGet("Lista_Usuarios")]
        public async Task<IActionResult> ObtenerUsuarios()
        {
            return Ok(await _usuarioRepository.Obtener_Lista_Usuarios());
        }

        [HttpGet("Autenticar_Usuario {id},{correo},{contrasena}")]
        public async Task<IActionResult> Autenticacion_Contrasena(int id, string correo, string contrasena)
        {
            return Ok(await _usuarioRepository.Autenticacion_Usuario(id,correo,contrasena));
        }

        [HttpPost("Ingresar_Usuario")]
        public async Task<IActionResult> IngresarUsuario([FromBody] usuario usuario)
        {
            if (usuario == null)
                return BadRequest();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _usuarioRepository.Ingresar_Usuario(usuario);

            return Created("created", created);
        }

        [HttpPut("Actualizar_Usuario")]
        public async Task<IActionResult> ActualizarUsuario([FromBody] usuario usuario)
        {
            if (usuario == null)
                return BadRequest();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _usuarioRepository.Actualizar_Usuario(usuario);

            return NoContent();
        }

        [HttpDelete("Eliminar_Usuario{id}")]
        public async Task<IActionResult> EliminarUsuario(int id)
        {
            await _usuarioRepository.Borrar_Usuario(new usuario {id = id});

            return NoContent();
        }

    }
}
