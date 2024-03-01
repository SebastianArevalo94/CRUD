const url = "https://localhost:44363";

export const GetEmpleados = async () => {
  try {
    const resp = await fetch(`${url}/api/Empleados/GetEmpleados`, {
      method: "GET",
    });
    const json = await resp.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};


export const GetEmpleadoById = async (id) => {
  try {
    const resp = await fetch(`${url}/api/Empleados/GetEmpleadoById/${id}`, {
      method: "GET",
    });
    const json = await resp.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};


export const CreateEmpleado = async (empleado) => {
  try {
    const resp = await fetch(`${url}/api/Empleados/CreateEmpleado`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(empleado)
    });
    const json = await resp.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteEmpleado = async (id) => {
  try {
    const resp = await fetch(`${url}/api/Empleados/DeleteEmpleado/${id}`, {
      method: "DELETE",
    });
    const json = await resp.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const UpdateEmpleado = async (empleado) => {
  try {
    const resp = await fetch(`${url}/api/Empleados/UpdateEmpleado`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify(empleado)
      },
      body: JSON.stringify(empleado)
    });
    const json = await resp.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};