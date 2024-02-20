// Define una interfaz para los objetos de proveedor
interface Proveedor {
    id: string;
    nombre: string;
  }
  
// Declara tu arreglo de proveedores como un arreglo de objetos Proveedor
  export const proveedoresDB: Proveedor[] = [
    {
      id: "1",
      nombre: "DNM",
    },
    {
      id: "2",
      nombre: "PROPATO",
    },
    {
      id: "3",
      nombre: "UNC",
    },
    {
      id: "4",
      nombre: "NACION",
    },
    {
      id: "5",
      nombre: "IDM",
    }
  ];