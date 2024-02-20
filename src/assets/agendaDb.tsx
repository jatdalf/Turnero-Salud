interface agendadoInterface {
    RegistroNro: number,
    FechaAgenda: string,
    HoraInicio: string,
    HoraFin: string,
    Proveedor: string,
    NroOP:string,
    VolumenAprox: string,
    Usuario: string,
    Estado: boolean,
    Modificado: boolean
  }

export const agendado: agendadoInterface[]=[
    {
        RegistroNro: 1,
        FechaAgenda: "19/2/2024",
        HoraInicio: "10:30",
        HoraFin: "11:00",
        Proveedor: "2",
        NroOP:"123456/2024",
        VolumenAprox: "8 pallets",
        Usuario: "test",
        Estado: false,
        Modificado: false
  }    
]