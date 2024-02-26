// Define una interfaz para los objetos de proveedor
interface Proveedor {
    id: string;
    nombre: string;
    direccion: string;
    localidad: string;
    provincia: string;
    telefono: string;
    email: string;
    vigente: boolean;
    creo:string;
  }
  
// Declara tu arreglo de proveedores como un arreglo de objetos Proveedor
  export const proveedoresDB: Proveedor[] = [
    {
      id: "1",
      nombre: "DNM",
      direccion: "calle 123",
      localidad: "Córdoba",
      provincia: "Córdoba",
      telefono: "477-12345",
      email: "dnm@dnm.com",
      vigente: true,
      creo: "test"
    },
    {
      id: "2",
      nombre: "PROPATO",
      direccion: "calle 123",
      localidad: "Córdoba",
      provincia: "Córdoba",
      telefono: "477-12345",
      email: "dnm@dnm.com",
      vigente: true,
      creo: "test"
    },
    {
      id: "3",
      nombre: "UNC",
      direccion: "ciudad universitaria",
      localidad: "Córdoba",
      provincia: "Córdoba",
      telefono: "3526 333333",
      email: "hemoderivados@unc.com",
      vigente: true,
      creo: "test"
    },
    {
      id: "4",
      nombre: "NACION",
      direccion: "calle 1 esquina calle 2",
      localidad: "Ciudad Autónoma de Buenos Aires",
      provincia: "Buenos Aires",
      telefono: "1177-123456",
      email: "sin datos",
      vigente: true,
      creo: "test"
    },
    {
      id: "5",
      nombre: "IDM",
      direccion: "calle sin nombre 0",
      localidad: "Córdoba",
      provincia: "Córdoba",
      telefono: "156 200300",
      email: "idm@hotmail.com",
      vigente: true,
      creo: "test"
    }
  ];