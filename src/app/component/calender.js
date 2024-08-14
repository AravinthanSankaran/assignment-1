"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Link from "next/link";
import {
  IoPlayCircleOutline,
  IoCloseCircleOutline,
  IoTodayOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { IoMdBook } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";
import { useState, useEffect, useCallback } from "react";

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [eventDetails, setEventDetails] = useState({});
  const [view, setView] = useState("dayGridWeek");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const handleEventClick = (eventClickInfo) => {
    const eventId = eventClickInfo.event.id;
    setPopupContent(eventDetails[eventId]);
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent(null);
  };

  // Fetch events and event details from JSON files

  const fetchData = useCallback(async () => {
    try {
      const eventsResponse = await fetch("/data/events.json");
      const eventsData = await eventsResponse.json();
      setEvents(eventsData);

      const detailsResponse = await fetch("/data/eventDetails.json");
      const detailsData = await detailsResponse.json();
      setEventDetails(detailsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const isPastEvent = (eventDate) => {
    const today = new Date();
    const eventDateObj = new Date(eventDate);
    return eventDateObj < today;
  };

  const renderEventContent = (eventInfo) => {
    const eventId = eventInfo.event.id;
    const details = eventDetails[eventId] || {};

    return (
      <div className="flex flex-col p-2 bg-calendercard border-1 border-blue-500 rounded-md">
        <div className="text-sm description-container ">
          {details.event?.description}
        </div>
        <div className="flex items-center">
          <FaVideo className="font-bold mr-2 text-blue-500 w-6 h-6" />
          <div className="font-bold description-container">
            {eventInfo.event.title}
          </div>
        </div>

        <div className="text-xs">{details.event?.time}</div>
        {isPastEvent(details.event?.date) && (
          <Link
            href={"/content"}
            className="ml-0 md:ml-2 mt-2 text-blue-500 bg-white hover:bg-primary md:p-[2px] font-semibold border-2 border-blue-500 rounded-lg font-roboto text-center cursor-pointer"
          >
            play
          </Link>
        )}
      </div>
    );
  };

  return (
    <div className="w-full text-white p-5 font-roboto h-[75vh] overflow-y-auto ">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView={view}
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "today",
        }}
        events={events}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
        contentHeight="auto"
        height="100%"
      />
      {isPopupOpen && (
        <>
          <div className="" />
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-[#C3C4C9] opacity-50"></div>
            <div className="relative bg-gray-800  text-white p-5 rounded shadow-lg w-96">
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <IoPlayCircleOutline className="text-blue-500" />
                    <p className="ml-2">{popupContent.type}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-roboto text-lg font-semibold mt-2 tracking-wider leading-loose ">
                    {popupContent.event.title}
                  </p>
                  <IoCloseCircleOutline
                    className="text-white w-9 h-9 cursor-pointer"
                    onClick={closePopup}
                  />
                </div>
              </div>
              <hr className="border-black m-2 border-1" />

              <div className="mt-4">
                <div className="flex items-center">
                  <IoMdBook className="text-white mr-2" />
                  <p className="tracking-wider leading-loose">
                    {popupContent.event.description}
                  </p>
                </div>
                <div className="flex items-center mt-2">
                  <IoTodayOutline className="text-white mr-2" />
                  <p className="tracking-wider leading-loose">
                    {popupContent.event.date} || {popupContent.event.day}
                  </p>
                </div>
                <div className="flex items-center mt-2">
                  <IoTimeOutline className="text-white mr-2" />
                  <p className="tracking-wider leading-loose">
                    {popupContent.event.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
