using CRUD_PRUEBA.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;

namespace CRUD_PRUEBA.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadosController : ControllerBase
    {
        private readonly PruebasContext _context;

        public EmpleadosController(PruebasContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetEmpleados")]
        public IActionResult GetEmpleados()
        {
            try
            {
                List<Empleado> empleados = _context.Empleados.ToList();
                return StatusCode(StatusCodes.Status200OK, new
                {
                    message = "Success",
                    data = empleados
                });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    message = ex.ToString(),
                });
            }
        }

        [HttpGet]
        [Route("GetEmpleadoById/{Id:int}")]
        public IActionResult GetEmpleadoById(int Id)
        {
            try
            {
                Empleado empleado = _context.Empleados.Find(Id);

                if (empleado == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, new
                    {
                        message = "Empleado Not Found!"
                    });
                }

                return StatusCode(StatusCodes.Status200OK, new
                {
                    message = "Success",
                    data = empleado
                });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    message = ex.ToString(),
                });
            }
        }

        [HttpPost]
        [Route("CreateEmpleado")]
        public IActionResult CreateEmpleado([FromBody]Empleado empleado)
        {
            try
            {
                _context.Empleados.Add(empleado);
                _context.SaveChanges();

                return StatusCode(StatusCodes.Status201Created, new
                {
                    message = "El Empleado ha sido creado!",
                    status = 201
                });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    message = ex.ToString(),
                });
            }
        }

        [HttpPut]
        [Route("UpdateEmpleado")]
        public IActionResult UpdateEmpleado([FromBody]Empleado newData)
        {
            try
            {
                Empleado empleado = _context.Empleados.Find(newData.Id);

                if (empleado == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, new
                    {
                        message = "Empleado Not Found!"
                    });
                }

                empleado.Nombres = newData.Nombres;
                empleado.Apellidos = newData.Apellidos;
                empleado.Edad = newData.Edad;
                empleado.FechaIngreso = newData.FechaIngreso;
                empleado.Sueldo = newData.Sueldo;
                empleado.Telefono = newData.Telefono;
                empleado.CorreoElectronico = newData.CorreoElectronico;
                empleado.Cedula = newData.Cedula;

                _context.SaveChanges();

                return StatusCode(StatusCodes.Status200OK, new
                {
                    message = "El empleado ha sido actualizado!",
                    status = 200
                });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    message = ex.ToString(),
                });
            }
        }

        [HttpDelete]
        [Route("DeleteEmpleado/{Id:int}")]
        public IActionResult DeleteEmpleado(int Id)
        {
            try
            {
                Empleado empleado = _context.Empleados.Find(Id);

                if (empleado == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, new
                    {
                        message = "Empleado Not Found!"
                    });
                }

                _context.Empleados.Remove(empleado); 
                _context.SaveChanges();

                return StatusCode(StatusCodes.Status200OK, new
                {
                    message = "El empleado ha sido eliminado!",
                    status = 200
                });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    message = ex.ToString(),
                });
            }
        }
    }
}
