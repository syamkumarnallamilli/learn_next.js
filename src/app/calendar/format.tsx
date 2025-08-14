// 'use client';
// import React from 'react';

// const schedule = [
//   {
//     time: '10:00-10:15',
//     topic: 'Welcome & Introduction',
//     format: 'Talk',
//     notes: 'Participant briefing',
//   },
//   {
//     time: '10:15-10:30',
//     topic: 'Overview of Balancers Workflow',
//     format: 'Presentation',
//     notes: 'Service model explanation',
//   },
//   {
//     time: '10:30-11:00',
//     topic: 'Balancers Partner App Usage',
//     format: 'Hands-on Demo',
//     notes: 'Accepting/Reserving tasks',
//   },
//   {
//     time: '11:00-11:30',
//     topic: 'Product & Kit Usage for Dry Wash',
//     format: 'Practical',
//     notes: 'How to use cleaning sprays',
//   },
// ];

// const TrainingSchedule = () => {
//   return (
//     <div className="overflow-x-auto rounded-md shadow-sm border border-gray-200 w-full max-w-4xl mx-auto mt-10">
//       <table className="min-w-full table-fixed text-left text-sm text-gray-700">
//         <thead className="bg-gray-50 text-gray-800">
//           <tr>
//             <th className="px-4 py-3 w-1/5">Time</th>
//             <th className="px-4 py-3 w-1/5">Module / Topic</th>
//             <th className="px-4 py-3 w-1/5">Format</th>
//             <th className="px-4 py-3 w-1/5">Trainer Notes</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-100 text-gray-500">
//           {schedule.map((item, index) => (
//             <tr key={index}>
//               <td className="px-4 py-3">{item.time}</td>
//               <td className="px-4 py-3">{item.topic}</td>
//               <td className="px-4 py-3">{item.format}</td>
//               <td className="px-4 py-3">{item.notes}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TrainingSchedule;


// 'use client';
// import React, { useState } from 'react';

// const morningTimes = ['10:00–10:15', '10:15–10:30', '10:30–11:00', '11:00–11:30'];
// const afternoonTimes = ['02:00–02:15', '02:15–02:30', '02:30–03:00', '03:00–03:30'];

// const sessionData = [
//   {
//     topic: 'Welcome & Introduction',
//     format: 'Talk',
//     notes: 'Participant briefing',
//   },
//   {
//     topic: 'Overview of Balancers Workflow',
//     format: 'Presentation',
//     notes: 'Service model explanation',
//   },
//   {
//     topic: 'Balancers Partner App Usage',
//     format: 'Hands-on Demo',
//     notes: 'Accepting/Reserving tasks',
//   },
//   {
//     topic: 'Product & Kit Usage for Dry Wash',
//     format: 'Practical',
//     notes: 'How to use cleaning sprays',
//   },
// ];

// const TrainingSchedule = () => {
//   const [session, setSession] = useState<'morning' | 'afternoon'>('morning');
//   const times = session === 'morning' ? morningTimes : afternoonTimes;

//   return (
//     <div className="overflow-x-auto rounded-md shadow-sm border border-gray-200 w-full max-w-4xl mx-auto mt-10">
//       <table className="min-w-full table-fixed text-left text-sm text-gray-700">
//         <thead className="bg-gray-50 text-gray-500">
//           <tr>
//             <th className="px-4 py-3 w-1/5 flex items-center gap-2">
//               Time
//               <select
//                 value={session}
//                 onChange={(e) => setSession(e.target.value as 'morning' | 'afternoon')}
//                 className="text-sm bg-white border border-gray-300 rounded px-1 py-0.5 focus:outline-none focus:ring focus:border-blue-500"
//               >
//                 <option value="morning">Morning Session</option>
//                 <option value="afternoon">Afternoon Session</option>
//               </select>
//             </th>
//             <th className="px-4 py-3 w-2/5">Module / Topic</th>
//             <th className="px-4 py-3 w-1/5">Format</th>
//             <th className="px-4 py-3 w-1/5">Trainer Notes</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-100">
//           {sessionData.map((item, index) => (
//             <tr key={index}>
//               <td className="px-4 py-3">{times[index]}</td>
//               <td className="px-4 py-3">{item.topic}</td>
//               <td className="px-4 py-3">{item.format}</td>
//               <td className="px-4 py-3">{item.notes}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TrainingSchedule;


'use client';
import React, { useState, useRef } from 'react';

const morningTimes = ['10:00–10:15', '10:15–10:30', '10:30–11:00', '11:00–11:30'];
const afternoonTimes = ['02:00–02:15', '02:15–02:30', '02:30–03:00', '03:00–03:30'];

const sessionData = [
  {
    topic: 'Welcome & Introduction',
    format: 'Talk',
    notes: 'Participant briefing',
  },
  {
    topic: 'Overview of Balancers Workflow',
    format: 'Presentation',
    notes: 'Service model explanation',
  },
  {
    topic: 'Balancers Partner App Usage',
    format: 'Hands-on Demo',
    notes: 'Accepting/Reserving tasks',
  },
  {
    topic: 'Product & Kit Usage for Dry Wash',
    format: 'Practical',
    notes: 'How to use cleaning sprays',
  },
];

const TrainingSchedule = () => {
  const [session, setSession] = useState<'morning' | 'afternoon'>('morning');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const times = session === 'morning' ? morningTimes : afternoonTimes;

  return (
    <div className="overflow-x-auto rounded-md shadow-sm border border-gray-200 w-full max-w-4xl mx-auto mt-10 relative">
      <table className="min-w-full table-fixed text-left text-sm text-gray-700">
        <thead className="bg-gray-50 text-gray-800">
          <tr>
            <th className="px-4 py-3 w-1/5 relative">
              <div className="flex items-center gap-1">
                Time
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="focus:outline-none"
                >
                  <svg
                    className="w-4 h-4 text-gray-500 hover:text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {dropdownOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded shadow text-gray-500">
                  <button
                    onClick={() => {
                      setSession('morning');
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                  >
                    Morning Session
                  </button>
                  <button
                    onClick={() => {
                      setSession('afternoon');
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                  >
                    Afternoon Session
                  </button>
                </div>
              )}
            </th>
            <th className="px-4 py-3 w-2/5">Module / Topic</th>
            <th className="px-4 py-3 w-1/5">Format</th>
            <th className="px-4 py-3 w-1/5">Trainer Notes</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {sessionData.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-3">{times[index]}</td>
              <td className="px-4 py-3">{item.topic}</td>
              <td className="px-4 py-3">{item.format}</td>
              <td className="px-4 py-3">{item.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainingSchedule;
