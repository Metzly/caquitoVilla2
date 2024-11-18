"use client";
import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const sheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const range = 'Sheet1!A:C'; 

const fetchEvents = async () => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  if (!data.values) return [];

  return data.values.slice(1).map(([title, start, end]) => ({
    title,
    start: new Date(start.split("/").reverse().join("-")), // Convierte DD/MM/YYYY a YYYY-MM-DD
    end: new Date(end.split("/").reverse().join("-")),     // Convierte DD/MM/YYYY a YYYY-MM-DD
  }));
};


const MyCalendar = () => {
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const sheetEvents = await fetchEvents();
      setEvents(sheetEvents);
    };
    getEvents();
  }, []);

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  );
};

export default MyCalendar;
