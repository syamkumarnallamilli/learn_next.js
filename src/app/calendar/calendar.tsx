// "use client";

// import React, { useState } from "react";
// import {
//   getCalendarDays,
//   formatDay,
//   formatFullDate,
//   getMonthYearLabel,
//   getNextMonth,
//   getPrevMonth,
//   getWeekDays,
//   isSameCalendarDay
// } from "./utils";

// interface ModernCalendarProps {
//   onSelect: (date: string) => void;
// }

// const ModernCalendar: React.FC<ModernCalendarProps> = ({ onSelect }) => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const days = getCalendarDays(currentDate);
//   const weekDays = getWeekDays();

//   const handleSelect = (day: Date | null) => {
//     if (day) {
//       setSelectedDate(day);
//       onSelect(formatFullDate(day));
//     }
//   };

//   return (
//     <div className="rounded-lg shadow-lg w-full max-w-md p-4 bg-white">
//       <div className="flex justify-between items-center mb-4">
//         <button onClick={() => setCurrentDate(getPrevMonth(currentDate))}>
//           ⬅️
//         </button>
//         <span className="font-semibold text-lg">
//           {getMonthYearLabel(currentDate)}
//         </span>
//         <button onClick={() => setCurrentDate(getNextMonth(currentDate))}>
//           ➡️
//         </button>
//       </div>

//       <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500">
//         {weekDays.map((day) => (
//           <div key={day}>{day}</div>
//         ))}
//       </div>

//       <div className="grid grid-cols-7 gap-2 mt-2">
//         {days.map((day, idx) => (
//           <button
//             key={idx}
//             onClick={() => handleSelect(day)}
//             disabled={!day}
//             className={`h-10 w-10 rounded-full flex items-center justify-center transition-all
//               ${
//                 isSameCalendarDay(day, selectedDate)
//                   ? "bg-blue-600 text-white"
//                   : "hover:bg-gray-200 text-gray-800"
//               }
//               ${!day ? "opacity-0" : ""}`}
//           >
//             {formatDay(day)}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ModernCalendar;


// "use client";

// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import DatePicker from "react-date-picker";
// import TimePicker from "react-time-picker";
// import "react-date-picker/dist/DatePicker.css";
// import "react-calendar/dist/Calendar.css";
// import "react-time-picker/dist/TimePicker.css";
// import "react-clock/dist/Clock.css";
// import { Calendar } from "lucide-react";

// const CustomCalendarForm = () => {
//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       date: null,
//       startTime: "",
//       endTime: "",
//     },
//   });

//   const onSubmit = (data) => {
//     console.log("Submitted:", data);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8 p-6 rounded shadow space-y-6 bg-white">
//       <h2 className="text-2xl font-semibold text-center text-gray-800">
//         Schedule Training
//       </h2>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         {/* Date Picker */}
//         <div>
//           <label className="block mb-1 text-sm font-medium text-gray-700">
//             Select Date
//           </label>
//           <div className="rounded-md  px-3 py-2 shadow-sm w-full">
//             <Controller
//               control={control}
//               name="date"
//               rules={{ required: "Date is required" }}
//               render={({ field }) => (
//                 <DatePicker
//   onChange={field.onChange}
//   value={field.value}
//   calendarIcon={<span><Calendar className="text-black "/></span>}
//                   clearIcon={null}
//                   className="text-sm rounded-xl text-black"
// />
//               )}
//             />
//           </div>
//           {errors.date && (
//             <p className="text-red-600 text-sm mt-1">{errors.date.message}</p>
//           )}
//         </div>

//         {/* Start Time Picker */}
//         <div>
//           <label className="block mb-1 text-sm font-medium text-gray-700">
//             Start Time
//           </label>
//           <div className="rounded-md border px-3 py-2 shadow-sm w-full">
//             <Controller
//               control={control}
//               name="startTime"
//               rules={{ required: "Start time is required" }}
//               render={({ field }) => (
//                 <TimePicker
//                   onChange={field.onChange}
//                   value={field.value}
//                   format="h:mm a"
//                   disableClock={false}
//                   clearIcon={null}
//                   className="w-full"
//                 />
//               )}
//             />
//           </div>
//           {errors.startTime && (
//             <p className="text-red-600 text-sm mt-1">{errors.startTime.message}</p>
//           )}
//         </div>

//         {/* End Time Picker */}
//         <div>
//           <label className="block mb-1 text-sm font-medium text-gray-700">
//             End Time
//           </label>
//           <div className="rounded-md border px-3 py-2 shadow-sm w-full">
//             <Controller
//               control={control}
//               name="endTime"
//               rules={{ required: "End time is required" }}
//               render={({ field }) => (
//                 <TimePicker
//                   onChange={field.onChange}
//                   value={field.value}
//                   format="h:mm a"
//                   disableClock={false}
//                   clearIcon={null}
//                   className="w-full"
//                 />
//               )}
//             />
//           </div>
//           {errors.endTime && (
//             <p className="text-red-600 text-sm mt-1">{errors.endTime.message}</p>
//           )}
//         </div>

//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CustomCalendarForm;


// "use client";

// import React from "react";
// import DatePicker from "react-datepicker";
// import { format } from "date-fns";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import "react-datepicker/dist/react-datepicker.css";

// const GoogleMeetDatePicker = ({ selected, onChange }) => {
//   return (
//     <div className="w-full max-w-sm mx-auto font-sans">
//       <DatePicker
//         selected={selected}
//         onChange={onChange}
//         dateFormat="yyyy-MM-dd"
//         showPopperArrow={false}
//         calendarClassName="!border border-gray-200 rounded-xl shadow-lg p-4 !bg-white transition-all duration-200"
//         dayClassName={(date) => {
//           const base = "  flex items-center justify-center text-sm font-medium rounded-full transition ";
//           const isToday = format(date, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");
//           const isSelected = format(date, "yyyy-MM-dd") === format(selected, "yyyy-MM-dd");

//           if (isSelected) {
//             return `${base} !bg-blue-400 text-white shadow-sm`;
//           } else if (isToday) {
//             return `${base} border border-blue-500 text-blue-600`;
//           } else {
//             return `${base} hover:bg-gray-100 text-gray-900`;
//           }
//         }}
//         renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
//           <div className="flex justify-between items-center mb-3 px-2">
//             <button
//               onClick={decreaseMonth}
//               type="button"
//               className="hover:bg-gray-100 p-2 rounded-full"
//             >
//               <ChevronLeft className="w-4 h-4 text-gray-600" />
//             </button>
//             <span className="text-sm font-semibold text-gray-800">
//               {format(date, "MMMM yyyy")}
//             </span>
//             <button
//               onClick={increaseMonth}
//               type="button"
//               className="hover:bg-gray-100 p-2 rounded-full"
//             >
//               <ChevronRight className="w-4 h-4 text-gray-600" />
//             </button>
//           </div>
//         )}
//       />
//     </div>
//   );
// };

// export default GoogleMeetDatePicker;

"use client";

import React from "react";
import DatePicker from "react-datepicker";
import { isSameDay, format } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";

const GoogleMeetCalendar = ({ selected, onChange }) => {
  const today = new Date();

  return (
    <div className="w-full max-w-sm mx-auto font-sans text-[13px]">
      <DatePicker
        selected={selected}
        onChange={onChange}
        dateFormat="yyyy-MM-dd"
        showPopperArrow={false}
        calendarClassName="!bg-white border border-[#dadce0] rounded-xl shadow-md px-3 py-3"
        dayClassName={(date) => {
          const base =
            " flex items-center justify-center rounded-full transition-all text-[13px] font-medium";
          const isSelected = isSameDay(date, selected);
          const isToday = isSameDay(date, today);

          if (isSelected) {
            return `${base} bg-[#1A73E8] text-white`;
          } else if (isToday) {
            return `${base} bg-[#E8F0FE] text-[#1A73E8]`;
          } else {
            return `${base} text-[#202124] hover:bg-[#E8F0FE] hover:text-[#1A73E8]`;
          }
        }}
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <div className="flex justify-between items-center mb-3 px-1">
            <button
              onClick={decreaseMonth}
              className="hover:bg-gray-100 p-1 rounded-full transition"
            >
              <ChevronLeft size={18} className="text-[#5f6368]" />
            </button>
            <div className="text-sm font-medium text-[#202124]">
              {format(date, "MMMM yyyy")}
            </div>
            <button
              onClick={increaseMonth}
              className="hover:bg-gray-100 p-1 rounded-full transition"
            >
              <ChevronRight size={18} className="text-[#5f6368]" />
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default GoogleMeetCalendar;
