import { Link, Outlet } from "react-router-dom";

export const Contact = () => {
  return (
    <button class= "bg-red-100" >
      Contactos
      <nav class="bg-red-50">
        <Link to={"/contact"}>Información de contactos</Link>  
      </nav>
      {}
      <Outlet />
    </button>
  );
};


