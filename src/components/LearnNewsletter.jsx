
// import { useState } from "react";
// import { Mail, LockKeyhole, ArrowRight } from "lucide-react";

// export default function LearnNewsletter() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!email.trim()) {
//       setMessage("Please enter your email address.");
//       return;
//     }

//     setMessage(
//       "Thank you for your interest! Newsletter subscriptions will be available soon."
//     );
//   };

//   return (
//     <section
//       className="w-full px-5 py-12 sm:py-14"
//       style={{ backgroundColor: "#fcfaff" }}
//     >
//       <div className="mx-auto flex w-full justify-center  rounded-2xl">
//         {/* Newsletter Card */}
//         <div
//           className="relative w-full overflow-hidden rounded-[15px] px-6 py-8 sm:px-8 sm:py-9"
//           style={{
//             maxWidth: "650px",
//             minHeight: "277px",
//             background: "#092c60",
//             boxShadow: "0 10px 18px rgba(9,44,96,0.14)",
//           }}
//         >
//           {/* Pink and purple background glow */}
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute"
//             style={{
//               width: "230px",
//               height: "230px",
//               right: "-65px",
//               bottom: "-100px",
//               borderRadius: "50%",
//               background:
//                 "radial-gradient(circle, rgba(189,45,121,0.38) 0%, rgba(115,37,125,0.25) 45%, transparent 72%)",
//               filter: "blur(22px)",
//             }}
//           />

//           {/* Content */}
//           <div className="relative z-10">

//             {/* Eyebrow */}
//             <div className="mb-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
//               style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
//             >
//               <Mail size={11} color="#ffffff" />

//               <span
//                 className="text-[8px] font-semibold uppercase tracking-wide"
//                 style={{ color: "#ffffff" }}
//               >
//                 The Prega Gene Health Brief
//               </span>
//             </div>

//             {/* Heading */}
//             <h2
//               className="max-w-[510px] text-xl font-semibold leading-[1.25] tracking-tight sm:text-[22px]"
//               style={{ color: "#ffffff" }}
//             >
//               Calm, evidence-based reproductive
//               <br className="hidden sm:block" />
//               wellness delivered quarterly.
//             </h2>

//             {/* Description */}
//             <p
//               className="mt-2 max-w-[500px] text-[10px] leading-[1.8] sm:text-[11px]"
//               style={{ color: "#d5e0f0" }}
//             >
//               Receive thoughtful, medically verified insights on cycle tracking,
//               diagnostic advances, and proactive wellness directly in your inbox.
//               No spam. Unsubscribe anytime.
//             </p>

//             {/* Subscription Form */}
//             <form
//               onSubmit={handleSubmit}
//               className="mt-4 flex w-full max-w-[360px] flex-col gap-2 sm:flex-row"
//             >
//               <input
//                 type="email"
//                 aria-label="Email address"
//                 value={email}
//                 onChange={(event) => {
//                   setEmail(event.target.value);
//                   setMessage("");
//                 }}
//                 placeholder="Enter your email address"
//                 required
//                 className="h-[36px] w-full min-w-0 rounded-full border-0 px-3 text-[9px] outline-none sm:flex-1"
//                 style={{
//                   color: "#092c60",
//                   backgroundColor: "#ffffff",
//                 }}
//               />

//               <button
//                 type="submit"
//                 className="inline-flex h-[36px] shrink-0 items-center justify-center gap-1.5 rounded-full px-4 text-[9px] font-semibold text-white transition-colors hover:bg-[#a92168]"
//                 style={{ backgroundColor: "#bd2d79" }}
//               >
//                 Subscribe Brief
//                 <ArrowRight size={12} />
//               </button>
//             </form>

//             {/* Form feedback */}
//             {message && (
//               <p
//                 role="status"
//                 className="mt-2 text-[9px]"
//                 style={{ color: "#f5c6df" }}
//               >
//                 {message}
//               </p>
//             )}

//             {/* Privacy note */}
//             <div className="mt-3 flex items-center gap-1.5">
//               <LockKeyhole size={12} color="#d5e0f0" />

//               <p
//                 className="text-[8px] leading-4"
//                 style={{ color: "#d5e0f0" }}
//               >
//                 Strict medical privacy. Your data is encrypted and never shared.
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
