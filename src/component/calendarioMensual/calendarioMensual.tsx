import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './calendarioMensual.module.css'
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)

const CalendarioMensual = ()=>{
    type ValuePiece = Date | null;
    type Value = ValuePiece | [ValuePiece, ValuePiece];
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  
    const handleDateChange = (date: Date | null) => {
      setSelectedDate(date);    
    };
    
      return (
        <DatePicker
          className={styles.datepicker}
          selected={selectedDate}
          onChange={handleDateChange}          
          dateFormat="MM/yyyy"
          showMonthYearPicker
        />
      );
}

export default CalendarioMensual