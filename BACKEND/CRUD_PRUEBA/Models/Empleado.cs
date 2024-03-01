using System;
using System.Collections.Generic;

namespace CRUD_PRUEBA.Models;

public partial class Empleado
{
    public int Id { get; set; }

    public string? Nombres { get; set; }

    public string? Apellidos { get; set; }

    public int? Edad { get; set; }

    public double? Sueldo { get; set; }

    public DateOnly? FechaIngreso { get; set; }

    public long? Cedula { get; set; }

    public long? Telefono { get; set; }

    public string? CorreoElectronico { get; set; }
}
