// Define una interfaz para los objetos de proveedor
export interface Proveedor {
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
export const proveedores: Proveedor[] = [
    {
      id: "1",
      nombre: "proveedor1",
      direccion: "direccion1",
      localidad: "Mercedes",
      provincia: "San Luis",
      telefono: "000-000000",
      email: "proveedor1@email.com",
      vigente: true,
      creo: "test"
    },
    {
      id: "2",
      nombre: "test",
      direccion: "direccion 000",
      localidad: "Rosario",
      provincia: "Santa Fe",
      telefono: "372-372372",
      email: "test@mail.com",
      vigente: true,
      creo: "test"
    },
    {
      id: "3",
      nombre: "Deshabilitado",
      direccion: "sin direccion",
      localidad: "Córdoba",
      provincia: "Córdoba",
      telefono: "351-999 999999",
      email: "prueba@prueba.com",
      vigente: false,
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
    },
    {
        id: "6",
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
        id: "7",
        nombre: "PROPATO",
        direccion: "calle 123",
        localidad: "Córdoba",
        provincia: "Córdoba",
        telefono: "477-12345",
        email: "dnm@dnm.com",
        vigente: false,
        creo: "test"
      },
      {
        id: "8",
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
        id: "9",
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
        id: "10",
        nombre: "IDM",
        direccion: "calle sin nombre 0",
        localidad: "Córdoba",
        provincia: "Córdoba",
        telefono: "156 200300",
        email: "idm@hotmail.com",
        vigente: true,
        creo: "test"
      },
      {
        id: "11",
        nombre: "IDM",
        direccion: "calle sin nombre 0",
        localidad: "Córdoba",
        provincia: "Córdoba",
        telefono: "156 200300",
        email: "idm@hotmail.com",
        vigente: true,
        creo: "test"
      },
      {
          id: "12",
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
          id: "13",
          nombre: "PROPATO",
          direccion: "calle 123",
          localidad: "Córdoba",
          provincia: "Córdoba",
          telefono: "477-12345",
          email: "dnm@dnm.com",
          vigente: false,
          creo: "test"
        },
        {
          id: "14",
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
          id: "15",
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
          id: "16",
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