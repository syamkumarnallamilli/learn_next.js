// 'use client';

// import React, { useState } from 'react';

// export default function SurveyPage() {
//   const questions = [
//     {
//       id: 'rating',
//       label: '1. How was the service provided?',
//       type: 'radio',
//       options: ['Poor', 'Average', 'Excellent', 'Outstanding'],
//     },
//     {
//       id: 'recommend',
//       label: '2. Would you recommend us?',
//       type: 'radio',
//       options: ['Yes', 'Maybe', 'No'],
//     },
//     {
//       id: 'speed',
//       label: '3. Was the service fast enough?',
//       type: 'radio',
//       options: ['Too Slow', 'Okay', 'Fast', 'Very Fast'],
//     },
//     {
//       id: 'satisfaction',
//       label: '4. How satisfied are you overall?',
//       type: 'radio',
//       options: ['Not at all', 'Somewhat', 'Very', 'Extremely'],
//     },
//     {
//       id: 'return',
//       label: '5. Will you return again?',
//       type: 'radio',
//       options: ['Definitely Not', 'Maybe', 'Likely', 'Absolutely'],
//     },
//   ];

//   const [formData, setFormData] = useState<Record<string, string>>({});
//   const [step, setStep] = useState(0);
//   const current = questions[step];

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Submitted:', formData);
//   };

//   const handleNext = () => {
//     if (step < questions.length - 1) {
//       setStep((prev) => prev + 1);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-purple-950/60 text-white p-8 rounded-3xl shadow-2xl w-full max-w-3xl grid md:grid-cols-2 gap-8"
//       >
//         {/* Left Side - Survey Info */}
//         <div className="flex flex-col justify-center">
//           <h2 className="text-4xl font-bold mb-4">📋 SURVEY</h2>
//           <p className="text-gray-300 mb-6">
//             Please answer the following multiple-choice questions. You can add
//             an explanation if you'd like.
//           </p>
//           <p className="italic text-sm text-gray-400">— The Satisfyc Team</p>
//         </div>

//         {/* Right Side - Dynamic Question Form */}
//         <div className="space-y-6">
//           <div>
//             {/* Main Question Label */}
//             <label className="block text-sm uppercase tracking-wide text-gray-300 mb-2">
//               {current.label}
//             </label>

//             {/* Radio Options */}
//             <div className="space-y-3">
//               {current.options?.map((option) => (
//                 <label
//                   key={option}
//                   className={`flex items-center bg-purple-900 px-4 py-2 rounded-lg cursor-pointer ${
//                     formData[current.id] === option
//                       ? `ring-2 ring-green-400 bg-green-600/20`
//                       : ''
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name={current.id}
//                     value={option}
//                     checked={formData[current.id] === option}
//                     onChange={handleChange}
//                     className="mr-3 accent-green-500"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>

//             {/* Optional Comment Textarea */}
//             <div className="mt-4">
//               <label className="block text-xs text-gray-400 mb-1">
//                 Optional: Explain your answer
//               </label>
//               <textarea
//                 name={`${current.id}_comment`}
//                 rows={2}
//                 value={formData[`${current.id}_comment`] || ''}
//                 onChange={handleChange}
//                 placeholder="Additional comments..."
//                 className="w-full bg-purple-950 border border-purple-800 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-400"
//               />
//             </div>
//           </div>

//           {/* Navigation Button */}
//           <div className="text-right">
//             {step === questions.length - 1 ? (
//               <button
//                 type="submit"
//                 className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition"
//               >
//                 Submit
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 onClick={handleNext}
//                 className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition"
//               >
//                 Next
//               </button>
//             )}
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
// // export default function SurveyPage() {
// //     const questions=[
// //         {
// //             label:'1.How was the service provide?',
// //             type:'radio',
// //             options:['Poor','Average','Excellent','Outstanding']

// //         },
// //         {
// //             label:'2.How was the service provide?',
// //             type:'radio',
// //             options:['Poor','Average','Excellent','Outstanding']

// //         },
// //         {
// //             label:'2.How was the service provide?',
// //             type:'radio',
// //             options:['Poor','Average','Excellent','Outstanding']

// //         }
// //     ]
// //     return(
// //         <div className="min-h-screen border flex items-center justify-center p-6">
// //             <div className="space-y-4 w-1/2">
// //                 <h1>Survey</h1>
// //                 <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates debitis tempora nostrum. Deleniti reprehenderit tempora ratione error incidunt provident dolorum velit ipsum, dicta maxime distinctio aspernatur recusandae laborum quas esse? </p>
// //                 <p>-Varma</p>
// //             </div>
// //             <div>
// //                 <form>
// //                     {questions.map((question, index) => (
// //                         <div key={index} className="mb-4">
// //                             <label className="block text-sm font-medium text-gray-700 mb-2">
// //                                 {question.label}
// //                             </label>
// //                             <div className="space-y-2">
// //                                 {question.options.map((option, idx) => (
// //                                     <label key={idx} className="flex items-center">
// //                                         <input
// //                                             type={question.type}
// //                                             name={`question-${index}`}
// //                                             value={option}
// //                                             className="mr-2"
// //                                         />
// //                                         {option}
// //                                     </label>
// //                                 ))}
// //                             </div>
// //                         </div>
// //                     ))}
// //                     <div className="">
// //                         <button
// //                             type="submit"
// //                             className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition"
// //                         >
// //                             Submit
// //                         </button>
// //                     </div>
// //                 </form>
// //             </div>
// //         </div>
// //     )
// // }


// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// export default function SurveyPage() {
//   const questions = [
//     {
//       id: 'rating',
//       label: '1. How was the service provided?',
//       type: 'radio',
//       options: ['Poor', 'Average', 'Excellent', 'Outstanding'],
//     },
//     {
//       id: 'recommend',
//       label: '2. Would you recommend us?',
//       type: 'radio',
//       options: ['Yes', 'Maybe', 'No'],
//     },
//     {
//       id: 'speed',
//       label: '3. Was the service fast enough?',
//       type: 'radio',
//       options: ['Too Slow', 'Okay', 'Fast', 'Very Fast'],
//     },
//     {
//       id: 'satisfaction',
//       label: '4. How satisfied are you overall?',
//       type: 'radio',
//       options: ['Not at all', 'Somewhat', 'Very', 'Extremely'],
//     },
//     {
//       id: 'return',
//       label: '5. Will you return again?',
//       type: 'radio',
//       options: ['Definitely Not', 'Maybe', 'Likely', 'Absolutely'],
//     },
//   ];

//   const [formData, setFormData] = useState<Record<string, string>>({});
//   const [step, setStep] = useState(0);
//   const [submitted, setSubmitted] = useState(false);
//   const current = questions[step];

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Submitted:', formData);
//     setSubmitted(true);
//   };

//   const handleNext = () => {
//     if (step < questions.length - 1) {
//       setStep((prev) => prev + 1);
//     }
//   };

//   // ------------------------
//   // ✅ Success Animation View
//   // ------------------------
//   if (submitted) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center relative overflow-hidden">
//         {/* Bike Animation */}
//         <motion.div
//           initial={{ x: '-150px' }}
//           animate={{ x: '100vw' }}
//           transition={{ duration: 4, ease: 'easeInOut' }}
//           className="absolute bottom-24"
//         >
//           <Image src="/image.png" alt="bike" width={400} height={400} />
//         </motion.div>

//         {/* Thank You Text Appears After Bike */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 4, duration: 1 }}
//           className="text-center"
//         >
//           <h1 className="text-white text-5xl font-bold mb-2">Thank You!</h1>
//           <p className="text-white text-lg">Explore Balancers</p>
//         </motion.div>
//       </div>
//     );
//   }

//   // ------------------------
//   // ✅ Survey Form View
//   // ------------------------
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-purple-950/60 text-white p-8 rounded-3xl shadow-2xl w-full max-w-3xl grid md:grid-cols-2 gap-8"
//       >
//         {/* Left Side - Survey Info */}
//         <div className="flex flex-col justify-center">
//           <h2 className="text-4xl font-bold mb-4">📋 SURVEY</h2>
//           <p className="text-gray-300 mb-6">
//             Please answer the following multiple-choice questions. You can add
//             an explanation if you'd like.
//           </p>
//           <p className="italic text-sm text-gray-400">— The Satisfyc Team</p>
//         </div>

//         {/* Right Side - Dynamic Question Form */}
//         <div className="space-y-6">
//           <div>
//             <label className="block text-sm uppercase tracking-wide text-gray-300 mb-2">
//               {current.label}
//             </label>

//             <div className="space-y-3">
//               {current.options?.map((option) => (
//                 <label
//                   key={option}
//                   className={`flex items-center bg-purple-900 px-4 py-2 rounded-lg cursor-pointer ${
//                     formData[current.id] === option
//                       ? `ring-2 ring-green-400 bg-green-600/20`
//                       : ''
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name={current.id}
//                     value={option}
//                     checked={formData[current.id] === option}
//                     onChange={handleChange}
//                     className="mr-3 accent-green-500"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>

//             {/* Optional Comment */}
//             <div className="mt-4">
//               <label className="block text-xs text-gray-400 mb-1">
//                 Optional: Explain your answer
//               </label>
//               <textarea
//                 name={`${current.id}_comment`}
//                 rows={2}
//                 value={formData[`${current.id}_comment`] || ''}
//                 onChange={handleChange}
//                 placeholder="Additional comments..."
//                 className="w-full bg-purple-950 border border-purple-800 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-400"
//               />
//             </div>
//           </div>

//           <div className="text-right">
//             {step === questions.length - 1 ? (
//               <button
//                 type="submit"
//                 className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition"
//               >
//                 Submit
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 onClick={handleNext}
//                 className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition"
//               >
//                 Next
//               </button>
//             )}
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }


// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation'; // ✅ for client-side redirect

// export default function SurveyPage() {
//   const router = useRouter();
//   const questions = [
//     {
//       id: 'rating',
//       label: '1. How was the service provided?',
//       type: 'radio',
//       options: ['Poor', 'Average', 'Excellent', 'Outstanding'],
//     },
//     {
//       id: 'recommend',
//       label: '2. Would you recommend us?',
//       type: 'radio',
//       options: ['Yes', 'Maybe', 'No'],
//     },
//     {
//       id: 'speed',
//       label: '3. Was the service fast enough?',
//       type: 'radio',
//       options: ['Too Slow', 'Okay', 'Fast', 'Very Fast'],
//     },
//     {
//       id: 'satisfaction',
//       label: '4. How satisfied are you overall?',
//       type: 'radio',
//       options: ['Not at all', 'Somewhat', 'Very', 'Extremely'],
//     },
//     {
//       id: 'return',
//       label: '5. Will you return again?',
//       type: 'radio',
//       options: ['Definitely Not', 'Maybe', 'Likely', 'Absolutely'],
//     },
//   ];

//   const [formData, setFormData] = useState<Record<string, string>>({});
//   const [step, setStep] = useState(0);
//   const current = questions[step];

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Submitted:', formData);

//     // Redirect to thank you screen
//     router.push('/survey/thankyou');
//   };

//   const handleNext = () => {
//     if (step < questions.length - 1) {
//       setStep((prev) => prev + 1);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-purple-950/60 text-white p-8 rounded-3xl shadow-2xl w-full max-w-3xl grid md:grid-cols-2 gap-8"
//       >
//         <div className="flex flex-col justify-center">
//           <h2 className="text-4xl font-bold mb-4">📋 SURVEY</h2>
//           <p className="text-gray-300 mb-6">
//             Please answer the following multiple-choice questions. You can add an explanation if you'd like.
//           </p>
//           <p className="italic text-sm text-gray-400">— The Satisfyc Team</p>
//         </div>

//         <div className="space-y-6">
//           <div>
//             <label className="block text-sm uppercase tracking-wide text-gray-300 mb-2">
//               {current.label}
//             </label>

//             <div className="space-y-3">
//               {current.options?.map((option) => (
//                 <label
//                   key={option}
//                   className={`flex items-center bg-purple-900 px-4 py-2 rounded-lg cursor-pointer ${
//                     formData[current.id] === option
//                       ? 'ring-2 ring-green-400 bg-green-600/20'
//                       : ''
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name={current.id}
//                     value={option}
//                     checked={formData[current.id] === option}
//                     onChange={handleChange}
//                     className="mr-3 accent-green-500"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>

//             <div className="mt-4">
//               <label className="block text-xs text-gray-400 mb-1">
//                 Optional: Explain your answer
//               </label>
//               <textarea
//                 name={`${current.id}_comment`}
//                 rows={2}
//                 value={formData[`${current.id}_comment`] || ''}
//                 onChange={handleChange}
//                 placeholder="Additional comments..."
//                 className="w-full bg-purple-950 border border-purple-800 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-400"
//               />
//             </div>
//           </div>

//           <div className="text-right">
//             {step === questions.length - 1 ? (
//               <button
//                 type="submit"
//                 className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition"
//               >
//                 Submit
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 onClick={handleNext}
//                 className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition"
//               >
//                 Next
//               </button>
//             )}
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";
// import clsx from "clsx";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function SurveyPage() {
//   const questions = [
//     {
//       label: "1. How satisfied are you with our product quality?",
//       options: ["Very Dissatisfied", "Dissatisfied", "Satisfied", "Very Satisfied"],
//     },
//     {
//       label: "2. How would you rate our customer support?",
//       options: ["Poor", "Fair", "Good", "Excellent"],
//     },
//     {
//       label: "3. Was your order delivered on time?",
//       options: ["No", "Slightly Late", "Yes", "Before Expected"],
//     },
//     {
//       label: "4. Would you shop with us again?",
//       options: ["Definitely Not", "Maybe", "Likely", "Absolutely"],
//     },
//     {
//       label: "5. Any suggestions to improve our service?",
//       options: ["More discounts", "Faster delivery", "Better packaging", "Others"],
//     },
//   ];

//   const [hasStarted, setHasStarted] = useState(false);
//   const [current, setCurrent] = useState(0);
//   const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
//    const router = useRouter();
//   const handleStart = () => setHasStarted(true);
//   const handleSelect = (option: string) => {
//     const updated = [...answers];
//     updated[current] = option;
//     setAnswers(updated);
//   };

//   const handleNext = () => {
//     if (current < questions.length - 1) setCurrent(current + 1);
//   };

//   const handlePrev = () => {
//     if (current > 0) setCurrent(current - 1);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//   //  router.push("/feedback/Thankyouscreen")
//     console.log("Submitted answers:", answers);
//     router.push('/survey/thankyou')
    
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#143DD6] via-blue-400 to-blue-500 flex flex-col md:flex-row items-center justify-center py-6 gap-10">
//       {/* Left Info Section */}
//       <div className="w-full md:w-1/2  md:px-4 flex flex-col ">
//         <div className="flex gap-3  px-6 md:px-2 xl:px-10 items-center">
//           <Image src="/logo.svg" className="rounded-xl w-10 h-10 md:w-20 md:h-20" width={10} height={10} alt="logo" />
//           <h1 className="text-xl md:text-2xl xl:text-3xl font-bold bg-white/90 text-transparent bg-clip-text drop-shadow">
//             Balancers Survey
//           </h1>
//         </div>

//         <Image
//           src="/bike.svg"
//           height={60}
//           width={60}
//           alt="Balancers"
//           className="w-full "
//         />

//         {/* <p className="italic text-gray-800 text-end font-bold">— Team Balancers</p> */}
//       </div>

//       {/* Right Form Section */}
//       <div className="w-full md:w-1/2 flex  flex-col items-center">
//         {!hasStarted ? (
//           <div
//             className={`
//               text-center  max-w-md bg-white/20 backdrop-blur-md p-6 mx-5  rounded-2xl shadow-md
//               transform transition-all duration-500 ease-out
//               translate-y-0 opacity-100
//             `}
//           >
           
//             <p className="text-white/90 text-base lg:text-lg mb-6">
//               Your feedback helps us serve you better! Please take a moment to answer this short survey.
//             </p>
//             <button
//               onClick={handleStart}
//               className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-xl font-semibold transition"
//             >
//               Start Survey
//             </button>
//           </div>
//         ) : (
//          <div
//   className={`
//     w-full max-w-[90vw] md:w-[350px] lg:w-[450px] min-h-[400px] bg-[#FFFFFF1A] backdrop-blur-md rounded-2xl p-6 shadow-lg
//     transform transition-all duration-700 ease-out
//     animate-slide-up mx-5
//   `}
// >

//             {/* Progress Bar */}
//             <div className="mb-6">
//               <div className="text-white text-sm mb-2">
//                 Question {current + 1} of {questions.length}
//               </div>
//               <div className="w-full bg-white/30 rounded-full h-2">
//                 <div
//                   className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
//                   style={{ width: `${((current + 1) / questions.length) * 100}%` }}
//                 />
//               </div>
//             </div>

//             <form onSubmit={handleSubmit}>
//               <label className="block text-base font-semibold mb-4 text-white">
//                 {questions[current].label}
//               </label>

//               <div className="flex flex-col gap-4 mb-6">
//                 {questions[current].options.map((option, index) => (
//                   <div
//                     key={index}
//                     onClick={() => handleSelect(option)}
//                     className={clsx(
//                       "rounded-xl p-2 text-center text-white bg-blue-500 font-medium cursor-pointer transition",
//                       answers[current] === option
//                         ? "  border-yellow-500 border-2 shadow-md"
//                         : "hover:bg-gray-300 hover:text-black "
//                     )}
//                   >
//                     {option}
//                   </div>
//                 ))}
//               </div>

//               <div className="flex justify-between">
//                 <button
//                   type="button"
//                   onClick={handlePrev}
//                   disabled={current === 0}
//                   className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg disabled:opacity-50"
//                 >
//                   Previous
//                 </button>

//                 {current === questions.length - 1 ? (
//                   <button
//                     type="submit"
//                     disabled={!answers[current]}
//                     className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
//                   >
//                     Submit
//                   </button>
//                 ) : (
//                   <button
//                     type="button"
//                     onClick={handleNext}
//                     disabled={!answers[current]}
//                     className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition disabled:opacity-50"
//                   >
//                     Next
//                   </button>
//                 )}
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";
// import clsx from "clsx";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function SurveyPage() {
//   const questions = [
//     {
//       label: "1. How satisfied are you with our product quality?",
//       options: ["Very Dissatisfied", "Dissatisfied", "Satisfied", "Very Satisfied"],
//     },
//     {
//       label: "2. How would you rate our customer support?",
//       options: ["Poor", "Fair", "Good", "Excellent"],
//     },
//     {
//       label: "3. Was your order delivered on time?",
//       options: ["No", "Slightly Late", "Yes", "Before Expected"],
//     },
//     {
//       label: "4. Would you shop with us again?",
//       options: ["Definitely Not", "Maybe", "Likely", "Absolutely"],
//     },
//     {
//       label: "5. Any suggestions to improve our service?",
//       options: ["More discounts", "Faster delivery", "Better packaging", "Others"],
//     },
//   ];

//   const [hasStarted, setHasStarted] = useState(false);
//   const [current, setCurrent] = useState(0);
//   const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
//   const [submitted, setSubmitted] = useState(false);
//   const router = useRouter();

//   const handleStart = () => setHasStarted(true);

//   const handleSelect = (option: string) => {
//     const updated = [...answers];
//     updated[current] = option;
//     setAnswers(updated);
//   };

//   const handleNext = () => {
//     if (current < questions.length - 1) setCurrent(current + 1);
//   };

//   const handlePrev = () => {
//     if (current > 0) setCurrent(current - 1);
//   };

//   // Redirect to thank you screen after submission
//   useEffect(() => {
//     if (submitted) {
//       setTimeout(() => {
//         router.push("/survey/thankyou");
//       }, 1000);
//     }
//   }, [submitted]);

//   return (
//   <div className="min-h-screen bg-gradient-to-b from-[#143DD6] via-blue-400 to-blue-500">
//     <div className="w-full max-w-6xl flex items-center gap-3 py-6 border border-amber-400 px-4 md:px-0">
//         <Image
//           src="/logo.svg"
//           className="rounded-xl w-10 h-10 md:w-16 md:h-16"
//           width={64}
//           height={64}
//           alt="logo"
//         />
//         <h1 className="text-lg md:text-3xl font-bold bg-white/90 text-transparent bg-clip-text drop-shadow">
//           Balancers Survey
//         </h1>
//       </div>
//     <div className=" flex flex-col items-center justify-center px-4">

//       {/* Heading (Logo + Title) */}
      

//       {!hasStarted ? (
//         <div className="flex flex-col md:flex-row w-full max-w-6xl items-center justify-center gap-6 md:gap-10">

//           {/* Bike Image Section */}
//           <div className="w-full md:w-1/2 flex items-center justify-center">
//             <Image
//               src="/bike.svg"
//               height={60}
//               width={60}
//               alt="Balancers"
//               className="w-full"
//             />
//           </div>

//           {/* Start Survey Card */}
//           <div className="w-full md:w-1/2 flex items-center justify-center">
//             <div className="text-center max-w-md bg-white/20 backdrop-blur-md p-6 mx-5 rounded-2xl shadow-md transform transition-all duration-500 ease-out">
//               <p className="text-white/90 text-sm md:text-base lg:text-lg mb-6">
//                 Your feedback helps us serve you better! Please take a moment to answer this short survey.
//               </p>
//               <button
//                 onClick={handleStart}
//                 className="bg-yellow-400 hover:bg-yellow-500 text-sm text-black px-6 py-2 rounded-xl font-semibold transition"
//               >
//                 Start Survey
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="w-full flex items-center justify-center">
//           <form
//             action="https://script.google.com/macros/s/AKfycbyKnd476yzB0oASyWcFZKBlTvVJ7KMSeykoq_RveU5634x6Uj12iYTsEh4jUDImSN27/exec"
//             method="POST"
//             target="hidden_iframe"
//             onSubmit={() => setSubmitted(true)}
//             className="w-full max-w-[90vw] md:w-[350px] lg:w-[450px] min-h-[400px] bg-[#FFFFFF1A] backdrop-blur-md rounded-2xl p-6 shadow-lg transform transition-all duration-700 ease-out animate-slide-up mx-5"
//           >
//             {/* Progress Bar */}
//             <div className="mb-6">
//               <div className="text-white text-sm mb-2">
//                 Question {current + 1} of {questions.length}
//               </div>
//               <div className="w-full bg-white/30 rounded-full h-2">
//                 <div
//                   className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
//                   style={{ width: `${((current + 1) / questions.length) * 100}%` }}
//                 />
//               </div>
//             </div>

//             <label className="block text-base font-semibold mb-4 text-white">
//               {questions[current].label}
//             </label>

//             <div className="flex flex-col gap-4 mb-6">
//               {questions[current].options.map((option, index) => (
//                 <div
//                   key={index}
//                   onClick={() => handleSelect(option)}
//                   className={clsx(
//                     "rounded-xl p-2 text-center text-white bg-blue-500 font-medium cursor-pointer transition",
//                     answers[current] === option
//                       ? "border-yellow-500 border-2 shadow-md"
//                       : "hover:bg-gray-300 hover:text-black"
//                   )}
//                 >
//                   {option}
//                 </div>
//               ))}
//             </div>

//             {answers.map((ans, index) => (
//               <input
//                 key={index}
//                 type="hidden"
//                 name={`question${index + 1}`}
//                 value={ans}
//               />
//             ))}

//             <div className="flex justify-between">
//               <button
//                 type="button"
//                 onClick={handlePrev}
//                 disabled={current === 0}
//                 className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg disabled:opacity-50"
//               >
//                 Previous
//               </button>

//               {current === questions.length - 1 ? (
//                 <button
//                   type="submit"
//                   disabled={!answers[current]}
//                   className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
//                 >
//                   Submit
//                 </button>
//               ) : (
//                 <button
//                   type="button"
//                   onClick={handleNext}
//                   disabled={!answers[current]}
//                   className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition disabled:opacity-50"
//                 >
//                   Next
//                 </button>
//               )}
//             </div>

//             <iframe name="hidden_iframe" style={{ display: "none" }} />
//           </form>
//         </div>
//       )}
//     </div>
//   </div>
// );

// }