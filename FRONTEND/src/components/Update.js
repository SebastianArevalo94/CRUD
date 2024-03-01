import React, { useEffect, useState } from "react";
import { GetEmpleadoById, UpdateEmpleado } from "../services/empleados.http";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();

  const [empleado, setEmpleado] = useState({
    Id: 0,
    Nombres: "",
    Apellidos: "",
    Edad: null,
    Sueldo: null,
    FechaIngreso: "",
    Cedula: null,
    Telefono: null,
    CorreoElectronico: "",
  });

  const handleInutChange = ({ target }) => {
    setEmpleado({
      ...empleado,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UpdateEmpleado(empleado).then((resp) => {
      if (resp.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: resp.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(-1)
      }
    });
  };

  useEffect(() => {
    const idEmpleado = localStorage.getItem("idUpdate");
    GetEmpleadoById(idEmpleado).then((resp) => {
      const info = resp.data;
      setEmpleado({
        Id: info.id,
        Nombres: info.nombres,
        Apellidos: info.apellidos,
        Edad: info.edad,
        Sueldo: info.sueldo,
        FechaIngreso: info.fechaIngreso,
        Cedula: info.cedula,
        Telefono: info.telefono,
        CorreoElectronico: info.correoElectronico,
      });
    });
  }, []);

  return (
    <div className="d-flex flex-column mt-5">
      <h1 className="text-center">Editar Empleado</h1>
      <form
        className="card card-body container col-3 mt-4 p-4"
        onSubmit={handleSubmit}
      >
        <div class="mb-3">
          <label for="Nombres" class="form-label">
            Nombres
          </label>
          <input
            type="text"
            class="form-control"
            id="Nombres"
            name="Nombres"
            value={empleado.Nombres}
            onChange={handleInutChange}
          />
        </div>
        <div class="mb-3">
          <label for="Apellidos" class="form-label">
            Apellidos
          </label>
          <input
            type="text"
            class="form-control"
            id="Nombres"
            name="Apellidos"
            value={empleado.Apellidos}
            onChange={handleInutChange}
          />
        </div>
        <div class="mb-3">
          <label for="Edad" class="form-label">
            Edad
          </label>
          <input
            type="number"
            class="form-control"
            id="Edad"
            name="Edad"
            value={empleado.Edad}
            onChange={handleInutChange}
          />
        </div>
        <div class="mb-3">
          <label for="Sueldo" class="form-label">
            Sueldo
          </label>
          <input
            type="number"
            class="form-control"
            id="Sueldo"
            name="Sueldo"
            value={empleado.Sueldo}
            onChange={handleInutChange}
          />
        </div>
        <div class="mb-3">
          <label for="fecha-ingreso" class="form-label">
            Fecha Ingreso
          </label>
          <input
            type="date"
            class="form-control"
            id="fecha-ingreso"
            name="FechaIngreso"
            value={empleado.FechaIngreso}
            onChange={handleInutChange}
          />
        </div>
        <div class="mb-3">
          <label for="Cedula" class="form-label">
            Cedula
          </label>
          <input
            type="number"
            class="form-control"
            id="Cedula"
            name="Cedula"
            value={empleado.Cedula}
            onChange={handleInutChange}
          />
        </div>
        <div class="mb-3">
          <label for="Telefono" class="form-label">
            Telefono
          </label>
          <input
            type="number"
            class="form-control"
            id="Telefono"
            name="Telefono"
            value={empleado.Telefono}
            onChange={handleInutChange}
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Correo Electronico
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="CorreoElectronico"
            value={empleado.CorreoElectronico}
            onChange={handleInutChange}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" class="btn btn-primary">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
