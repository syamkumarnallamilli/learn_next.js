'use client'
import { useState } from "react";
import CustomCalendarForm from "./calendar";
import GoogleStyleDatePicker from "./calendar";
import ModernCalendar from "./calendar";
import Calendar from "./calendar";
import CalendarForm from "./calendarform";
import TrainingSchedule from "./format";


export default function SessionForm() {
     const [date, setDate] = useState(new Date());
  const handleDateSelect = (date: string) => {
    console.log("Selected Date:", date);
    // setValue("sessionDate", date); // If using React Hook Form
  };

  return (
    <div className="p-6">
      {/* <h1 className="text-xl font-bold mb-4">Create Session</h1>
       <GoogleStyleDatePicker selected={date} onChange={(date) => setDate(date)} />
        <CalendarForm/> */}

        <TrainingSchedule/>
    </div>
  );
}
