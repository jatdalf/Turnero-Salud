import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-calendar/dist/Calendar.css';
import styles from './calendario.module.css'; // Asegúrate de que el archivo CSS está importado correctamente

const Calendario: React.FC<{ onDateChange: (date: Date | null) => void }> = ({ onDateChange }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        onDateChange(date);
    };
    const isWeekday = (date: Date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
      };
    
    return (
        <DatePicker
            id="calendario1"
            className={styles.datepicker}
            dateFormat="dd/MM/yyyy"        
            selected={selectedDate}
            onChange={handleDateChange}
            locale="es"
            calendarClassName={styles.customCalendar}
            // filterDate={isWeekday}            
        />
    );
}

export default Calendario;
