"use client";
import dynamic from 'next/dynamic';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import es from 'date-fns/locale/es';
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  'es': es,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const CalendarComponent = () => {
  return (
    <div className="container mx-auto p-4 pt-24 pb-10 flex justify-center">
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 350, width: 900 }}
        culture='es'
        selectable={false}
        views={["month", "week", "day"]}
        messages={{
          next: 'Siguiente',
          previous: 'Anterior',
          today: 'Hoy',
          month: 'Mes',
          week: 'Semana',
          day: 'Día',
          date: 'Fecha',
          noEventsInRange: 'No hay eventos en este rango',
        }}
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(CalendarComponent), { ssr: false });
