import React from "react";

import { useState, useEffect } from "react";
import { DeleteEmpleado, GetEmpleados } from "../services/empleados.http";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const [empleados, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    GetEmpleados().then((resp) => {
      setData(resp.data);
    });
  }, []);

  const GoToCreate = () => {
    navigate("/create");
  };

  const GoToUpdate = (id) => {
    navigate("/update");
    localStorage.setItem("idUpdate", id);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Realmente quieres eliminar este usuario?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteEmpleado(id).then((resp) => {
          if (resp.status == 200) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: resp.message,
              showConfirmButton: false,
              timer: 1500,
            });
            GetEmpleados().then((resp) => {
              setData(resp.data);
            });
          }
        });
      }
    });
  };

  return (
    <div className="d-flex flex-column">
      <h1 className="mt-3 text-center">Lista de Empleados</h1>
      <div className="mt-3 container">
        <div className="d-flex justify-content-center">
          <button className="btn btn-success" onClick={GoToCreate}>
            Crear
          </button>
        </div>
        <table class="mt-3 table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Edad</th>
              <th scope="col">Sueldo</th>
              <th scope="col">Fecha Ingreso</th>
              <th scope="col">Cedula</th>
              <th scope="col">Telefono</th>
              <th scope="col">Correo Electronico</th>
              <th scope="col">Accion</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((empleado) => {
              return (
                <tr>
                  <td>{empleado.id}</td>
                  <td>{empleado.nombres}</td>
                  <td>{empleado.apellidos}</td>
                  <td>{empleado.edad}</td>
                  <td>{empleado.sueldo}</td>
                  <td>{empleado.fechaIngreso}</td>
                  <td>{empleado.cedula}</td>
                  <td>{empleado.telefono}</td>
                  <td>{empleado.correoElectronico}</td>
                  <td className="d-flex justify-content-evenly">
                    <button
                      className="btn btn-primary"
                      onClick={()=>{GoToUpdate(empleado.id)}}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(empleado.id);
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
            {/* <tr>
              <th>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
