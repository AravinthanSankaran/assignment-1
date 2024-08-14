"use client"

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useState } from "react";
export default function Calendar() {
  const [view, setView] = useState("dayGridWeek");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  // Define the events and their associated popup content
  const events = [
    { title: "Event 1", date: "2024-08-15", id: "1" },
    { title: "Event 2", date: "2024-08-16", id: "2" },
    { title: "Event 3", date: "2024-08-17", id: "3" },
  ];
  const eventDetails = {
    1: {
      type: "video",
      title: "Container with most water",
      event: {
        description: "Interview preparation with JavaScript batch 2",
        date: "21 Aug 2024",
        day: "Wednesday",
        time: "7:00 AM",
      },
    },
    2: {
      type: "article",
      title: "Understanding Async/Await",
      event: {
        description: "Deep dive into asynchronous JavaScript",
        date: "22 Aug 2024",
        day: "Thursday",
        time: "10:00 AM",
      },
    },
    3: {
      type: "workshop",
      title: "React Hooks Workshop",
      event: {
        description: "Hands-on workshop on React Hooks",
        date: "23 Aug 2024",
        day: "Friday",
        time: "2:00 PM",
      },
    },
  };
  const handleEventClick = (eventClickInfo) => {
    const eventId = eventClickInfo.event.id;
    setPopupContent(eventDetails[eventId]);
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent(null);
  };
  return (
    <div className="w-full text-white p-5 font-roboto">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView={view}
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "today",
        }}
        events={events}
        eventClick={handleEventClick}
      />
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-800 text-white p-5 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold">{popupContent.title}</h2>
            <p>Type: {popupContent.type}</p>
            <p>Description: {popupContent.event.description}</p>
            <p>Date: {popupContent.event.date}</p>
            <p>Day: {popupContent.event.day}</p>
            <p>Time: {popupContent.event.time}</p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
         
    </div>
  );
}
