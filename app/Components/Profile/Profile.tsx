// "use client";
// import { useTasks } from "@/context/taskContext";
// import { useUserContext } from "@/context/userContext";
// import Image from "next/image";
// import React from "react";

// function Profile() {
//   const { user } = useUserContext();
//   const { tasks, activeTasks, completedTasks, openProfileModal } = useTasks();
//   return (
//     <div className="m-6">
//       <div
//         className="px-2 py-4 flex items-center gap-3 bg-[#E6E6E6]/20 rounded-[0.8rem]
//         hover:bg-[#E6E6E6]/50 transition duration-300 ease-in-out cursor-pointer border-2 border-transparent hover:border-2 hover:border-white"
//         onClick={openProfileModal}
//       >
//         <div>
//           <Image
//             src={user?.photo}
//             alt="avatar"
//             width={70}
//             height={70}
//             className="rounded-full"
//           />
//         </div>
//         <div>
//           <h1 className="flex flex-col text-xl">
//             <span className=" font-medium">Hello,</span>
//             <span className="font-bold">{user?.name}</span>
//           </h1>
//         </div>
//       </div>

//       <div className="mt-6 flex flex-col gap-8">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="text-gray-400">
//             <p>Total Tasks:</p>
//             <p className="pl-4 relative flex gap-2">
//               <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-purple-500 rounded-[5px]"></span>
//               <span className="font-medium text-4xl text-[#333]">
//                 {tasks.length}
//               </span>
//             </p>
//           </div>
//           <div className="text-gray-400">
//             <p>In Progress:</p>
//             <p className="pl-4 relative flex gap-2">
//               <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-[#3AAFAE] rounded-[5px]"></span>
//               <span className="font-medium text-4xl text-[#333]">
//                 {activeTasks.length}
//               </span>
//             </p>
//           </div>
//           <div className="text-gray-400">
//             <p>Open Tasks:</p>
//             <p className="pl-4 relative flex gap-2">
//               <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-orange-400 rounded-[5px]"></span>
//               <span className="font-medium text-4xl text-[#333]">
//                 {activeTasks.length}
//               </span>
//             </p>
//           </div>
//           <div className="text-gray-400">
//             <p>Completed:</p>
//             <p className="pl-4 relative flex gap-2">
//               <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-green-400 rounded-[5px]"></span>
//               <span className="font-medium text-4xl text-[#333]">
//                 {completedTasks.length}
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//       <h3 className="mt-8 font-medium">Activity</h3>
//     </div>
//   );
// }

// export default Profile;


"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Clock, CheckCircle, ListTodo } from "lucide-react";

function Profile() {
  const { user } = useUserContext();
  const { tasks, activeTasks, completedTasks, openProfileModal } = useTasks();

  const stats = [
    {
      title: "Total Tasks",
      value: tasks.length,
      color: "bg-purple-500",
      icon: <ListTodo className="w-6 h-6 text-purple-500" />
    },
    {
      title: "In Progress",
      value: activeTasks.length,
      color: "bg-cyan-500",
      icon: <Clock className="w-6 h-6 text-cyan-500" />
    },
    {
      title: "Open Tasks",
      value: activeTasks.length,
      color: "bg-orange-400",
      icon: <Activity className="w-6 h-6 text-orange-400" />
    },
    {
      title: "Completed",
      value: completedTasks.length,
      color: "bg-green-400",
      icon: <CheckCircle className="w-6 h-6 text-green-400" />
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Card className="mb-8 overflow-hidden">
        <CardContent className="p-0">
          <div
            className="p-6 flex items-center gap-6 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 
            hover:from-purple-500/20 hover:to-cyan-500/20 transition-all duration-300 cursor-pointer
            group relative"
            onClick={openProfileModal}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <Image
                src={user?.photo}
                alt="avatar"
                width={90}
                height={90}
                className="rounded-full ring-4 ring-white/10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-1">
              <p className="text-gray-400 text-lg font-medium">Welcome back,</p>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                {user?.name}
              </h1>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-2">
        {stats.map((stat, index) => (
          <Card key={index} className="overflow-hidden group hover:ring-2 hover:ring-purple-500/20 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-gray-400 font-medium">{stat.title}</p>
                {stat.icon}
              </div>
              <div className="relative pl-4">
                <span className={`absolute h-[70%] w-1 left-0 top-1/2 -translate-y-1/2 ${stat.color} rounded-full group-hover:scale-y-110 transition-transform duration-300`} />
                <span className="font-bold text-4xl text-gray-800">
                  {stat.value}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

    
    </div>
  );
}

export default Profile;