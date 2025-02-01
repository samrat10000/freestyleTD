// "use client";
// import IconCheck from "@/public/icons/IconCheck";
// import IconDeleteAll from "@/public/icons/IconDeleteAll";
// import IconFileCheck from "@/public/icons/IconFileCheck";
// import IconGrid from "@/public/icons/IconGrid";
// import IconStopwatch from "@/public/icons/IconStopwatch";
// import { link } from "fs";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";

// function MiniSidebar() {
//   const pathname = usePathname();

//   const getStrokeColor = (link: string) => {
//     return pathname === link ? "#3aafae" : "#71717a";
//   };

//   const navItems = [
//     {
//       icon: <IconGrid strokeColor={getStrokeColor("/")} />,
//       title: "All",
//       link: "/",
//     },
//     {
//       icon: <IconFileCheck strokeColor={getStrokeColor("/completed")} />,
//       title: "Completed",
//       link: "/completed",
//     },
//     {
//       icon: <IconCheck strokeColor={getStrokeColor("/pending")} />,
//       title: "Pending",
//       link: "/pending",
//     },
//     {
//       icon: <IconStopwatch strokeColor={getStrokeColor("/overdue")} />,
//       title: "Overdue",
//       link: "/overdue",
//     },
//   ];
//   return (
//     <div className="basis-[5rem] flex flex-col bg-[#f9f9f9]">
//       <div className="flex items-center justify-center h-[5rem]">
//         <Image src="/logo.png" width={80} height={28} alt="logo" />
//       </div>

//       <div className="mt-8 flex-1 flex flex-col items-center justify-between">
//         <ul className="flex flex-col gap-10">
//           {navItems.map((item, index) => (
//             <li key={index} className="relative group">
//               <Link href={item.link}>{item.icon}</Link>

//               {/* Hover Tooltip */}
//               <span className="u-triangle absolute top-[50%] translate-y-[-50%] left-8 text-xs pointer-events-none text-white bg-[#3aafae] px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 {item.title}
//               </span>
//             </li>
//           ))}
//         </ul>

//         <div className="mb-[1.5rem]">
//           <button className="w-12 h-12 flex justify-center items-center border-2 border-[#EB4E31]  p-2 rounded-full">
//             <IconDeleteAll strokeColor="#EB4E31" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MiniSidebar;



"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import IconGrid from "@/public/icons/IconGrid";
import IconFileCheck from "@/public/icons/IconFileCheck";
import IconCheck from "@/public/icons/IconCheck";
import IconStopwatch from "@/public/icons/IconStopwatch";
import IconDeleteAll from "@/public/icons/IconDeleteAll";

function MiniSidebar() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const getStrokeColor = (link: string) => {
    return pathname === link ? "#3aafae" : hoveredItem === link ? "#3aafae" : "#71717a";
  };

  const navItems = [
    {
      icon: <IconGrid strokeColor={getStrokeColor("/")} />,
      title: "All Tasks",
      link: "/",
      count: 12,
      bgColor: "bg-emerald-100",
      ringColor: "ring-emerald-400"
    },
    {
      icon: <IconFileCheck strokeColor={getStrokeColor("/completed")} />,
      title: "Completed",
      link: "/completed",
      count: 5,
      bgColor: "bg-teal-100",
      ringColor: "ring-teal-400"
    },
    {
      icon: <IconCheck strokeColor={getStrokeColor("/pending")} />,
      title: "Pending",
      link: "/pending",
      count: 4,
      bgColor: "bg-sky-100",
      ringColor: "ring-sky-400"
    },
    {
      icon: <IconStopwatch strokeColor={getStrokeColor("/overdue")} />,
      title: "Overdue",
      link: "/overdue",
      count: 3,
      bgColor: "bg-amber-100",
      ringColor: "ring-amber-400"
    },
  ];

  return (
    <aside className="w-20 flex flex-col bg-white border-r border-gray-100 relative">
      {/* Glassmorphism effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-emerald-50/50 pointer-events-none" />
      
      {/* Logo Section */}
      <div className="relative h-20 flex items-center justify-center border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />
        <Image 
          src="/logo.png" 
          width={80} 
          height={28} 
          alt="logo" 
          priority 
          className="relative  transition-all duration-300 hover:scale-105" 
        />
      </div>

      <div className="mt-8 flex-1 flex flex-col items-center justify-between relative z-10">
        <nav className="w-full px-2">
          <ul className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <li key={index} 
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(item.link)}
                  onMouseLeave={() => setHoveredItem(null)}>
                <Link href={item.link}>
                  <div className={`
                    relative flex items-center justify-center w-14 h-14 mx-auto
                    rounded-xl ring-1 ring-gray-100
                    transition-all duration-500 ease-out
                    ${pathname === item.link 
                      ? `${item.bgColor} ring-2 ${item.ringColor} shadow-lg` 
                      : 'hover:bg-gray-50 hover:ring-2 hover:ring-gray-200 hover:shadow-md'}
                  `}>
                    {/* Animated background pulse on active */}
                    {pathname === item.link && (
                      <div className="absolute inset-0 rounded-xl animate-pulse opacity-20 bg-current" />
                    )}
                    
                    {/* Icon wrapper */}
                    <div className={`
                      relative transform transition-all duration-300
                      ${pathname === item.link ? 'scale-110' : 'group-hover:scale-110'}
                    `}>
                      {item.icon}
                    </div>
                    
                    {/* Enhanced Count Badge */}
                    {item.count > 0 && (
                      <span className={`
                        absolute -top-1.5 -right-1.5
                        min-w-[20px] h-5 px-1
                        text-xs font-semibold
                        flex items-center justify-center
                        rounded-full shadow-lg
                        transition-all duration-300
                        ${pathname === item.link 
                          ? 'bg-white text-[#3aafae]' 
                          : 'bg-[#3aafae] text-white'}
                        transform scale-90 group-hover:scale-100
                      `}>
                        {item.count}
                      </span>
                    )}
                  </div>
                </Link>

                {/* Advanced Tooltip */}
                <div className={`
                  absolute left-20 top-1/2 -translate-y-1/2
                  opacity-0 invisible translate-x-1
                  group-hover:opacity-100 group-hover:visible group-hover:translate-x-0
                  transition-all duration-300 ease-out z-50
                `}>
                  <div className="relative flex items-center">
                    {/* Triangle */}
                    <div className={`
                      absolute -left-2 w-3 h-3
                      bg-[#3aafae] rounded-sm
                      transform rotate-45 transition-transform duration-300
                      group-hover:scale-110
                    `} />
                    {/* Content */}
                    <div className={`
                      bg-[#3aafae] text-white
                      px-4 py-2 rounded-lg
                      text-sm font-medium
                      shadow-xl
                      transition-all duration-300
                      flex items-center gap-2
                    `}>
                      {item.title}
                      <span className="text-xs px-1.5 py-0.5 bg-white/20 rounded-full">
                        {item.count}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Delete Button */}
        <div className="mb-6 px-2 w-full">
          <button 
            className="group relative w-14 h-14 mx-auto
                     flex items-center justify-center 
                     rounded-xl ring-1 ring-red-200
                     transition-all duration-300
                     hover:bg-red-50 hover:ring-2 hover:ring-red-300
                     hover:shadow-md active:scale-95"
            onMouseEnter={() => setHoveredItem('delete')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="transform group-hover:scale-110 transition-all duration-300">
              <IconDeleteAll strokeColor="#EB4E31" />
            </div>
            
            {/* Delete Tooltip */}
            <div className="absolute left-20 top-1/2 -translate-y-1/2 
                          opacity-0 invisible translate-x-1
                          group-hover:opacity-100 group-hover:visible group-hover:translate-x-0
                          transition-all duration-300 ease-out z-50">
              <div className="relative flex items-center">
                <div className="absolute -left-2 w-3 h-3 bg-red-500 
                              transform rotate-45 rounded-sm" />
                <div className="bg-red-500 text-white px-4 py-2 rounded-lg 
                              text-sm font-medium whitespace-nowrap shadow-xl">
                  Delete All Tasks
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      
      {/* Enhanced bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 
                    bg-gradient-to-t from-white via-white/80 to-transparent 
                    pointer-events-none" />
    </aside>
  );
}

export default MiniSidebar;