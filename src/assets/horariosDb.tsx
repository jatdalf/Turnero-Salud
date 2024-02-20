const horariosDb = () =>{
    const horaInicio: string = '09:00';
    const intervalo: string = '00:30';
    const horaFinal: string = '14:00';
    
    const sumarIntervalo = (hora: string, intervalo: string): string => {
        const [horas, minutos] = hora.split(':').map(Number);
        const [intervaloHoras, intervaloMinutos] = intervalo.split(':').map(Number);
        
        let nuevaHora = horas + intervaloHoras;
        let nuevosMinutos = minutos + intervaloMinutos;
        
        if (nuevosMinutos >= 60) {
            nuevaHora += 1;
            nuevosMinutos -= 60;
          }
          
          return `${String(nuevaHora).padStart(2, '0')}:${String(nuevosMinutos).padStart(2, '0')}`;
      };
      
      const Horarios: string[] = [];
      let horaActual: string = horaInicio;
      let rangosHorarios: string[] = []
      
      while (horaActual <= horaFinal) {
          Horarios.push(horaActual);    
          horaActual = sumarIntervalo(horaActual, intervalo);
      }
      for (let i = 1; i < Horarios.length; i++) {
          rangosHorarios.push(Horarios[i-1] + " a " + Horarios[i])    
      }
    return rangosHorarios
}

export default horariosDb