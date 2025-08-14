"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import GoogleMeetCalendar from "./calendar" // Adjust path if needed

const CalendarForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      meetingDate: new Date(), // initial value
    },
  });

  const onSubmit = (data: { meetingDate: any; }) => {
    console.log("Selected Date:", data.meetingDate);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Controller
        control={control}
        name="meetingDate"
        render={({ field }) => (
          <GoogleMeetCalendar selected={field.value} onChange={field.onChange} />
        )}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default CalendarForm;
