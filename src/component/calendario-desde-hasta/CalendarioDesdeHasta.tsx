import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './CalendarioDesdeHasta.module.css'
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)

const CalendarioDesdeHasta = () =>{
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;
  
  return (
    <DatePicker
    className={styles.datepicker}
    selectsRange={true}
    startDate={startDate}
    endDate={endDate}
    onChange={(update) => {
      setDateRange([update[0], update[1]]);
    }}
    isClearable={true}
    locale="es"   
    />
  );
}
export default CalendarioDesdeHasta