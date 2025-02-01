// import { useTasks } from "@/context/taskContext";
// import { edit, star, trash } from "@/utils/Icons";
// import { Task } from "@/utils/types";
// import { formatTime } from "@/utils/utilities";
// import React from "react";
// import { motion } from "framer-motion";
// import { item } from "@/utils/animations";

// interface TaskItemProps {
//   task: Task;
// }

// function TaskItem({ task }: TaskItemProps) {
//   const getPriorityColor = (priority: string) => {
//     switch (priority) {
//       case "low":
//         return "text-green-500";
//       case "medium":
//         return "text-yellow-500";
//       case "high":
//         return "text-red-500";
//       default:
//         return "text-red-500";
//     }
//   };

//   const { getTask, openModalForEdit, deleteTask, modalMode } = useTasks();

//   return (
//     <motion.div
//       className="h-[16rem] px-4 py-3 flex flex-col gap-4 shadow-sm bg-[#f9f9f9] rounded-lg border-2 border-white"
//       variants={item}
//     >
//       <div>
//         <h4 className="font-bold text-2xl">{task.title}</h4>
//         <p>{task.description}</p>
//       </div>
//       <div className="mt-auto flex justify-between items-center">
//         <p className="text-sm text-gray-400">{formatTime(task.createdAt)}</p>
//         <p className={`text-sm font-bold ${getPriorityColor(task.priority)}`}>
//           {task.priority}
//         </p>
//         <div>
//           <div className="flex items-center gap-3 text-gray-400 text-[1.2rem]">
//             <button
//               className={`${
//                 task.completed ? "text-yellow-400" : "text-gray-400"
//               }`}
//             >
//               {star}
//             </button>
//             <button
//               className="text-[#00A1F1]"
//               onClick={() => {
//                 getTask(task._id);
//                 openModalForEdit(task);
//               }}
//             >
//               {edit}
//             </button>
//             <button
//               className="text-[#F65314]"
//               onClick={() => {
//                 deleteTask(task._id);
//               }}
//             >
//               {trash}
//             </button>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default TaskItem;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTasks } from "@/context/taskContext";
import { edit, star, trash } from "@/utils/Icons";
import { Task } from "@/utils/types";
import { formatTime } from "@/utils/utilities";
import { item } from "@/utils/animations";

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  const { getTask, openModalForEdit, deleteTask } = useTasks();
  const [isHovered, setIsHovered] = useState(false);

  const getPriorityConfig = (priority: string) => {
    const configs = {
      low: {
        gradient: "from-emerald-400/20 via-green-400/10 to-teal-400/20",
        border: "group-hover:border-emerald-200",
        badge: "from-emerald-500 to-green-500 shadow-emerald-500/20",
        glow: "group-hover:shadow-emerald-200/30",
        icon: "group-hover:text-emerald-500",
        progress: "from-emerald-400 via-green-500 to-teal-400"
      },
      medium: {
        gradient: "from-amber-400/20 via-yellow-400/10 to-orange-400/20",
        border: "group-hover:border-amber-200",
        badge: "from-amber-500 to-yellow-500 shadow-amber-500/20",
        glow: "group-hover:shadow-amber-200/30",
        icon: "group-hover:text-amber-500",
        progress: "from-amber-400 via-yellow-500 to-orange-400"
      },
      high: {
        gradient: "from-rose-400/20 via-red-400/10 to-pink-400/20",
        border: "group-hover:border-rose-200",
        badge: "from-rose-500 to-red-500 shadow-rose-500/20",
        glow: "group-hover:shadow-rose-200/30",
        icon: "group-hover:text-rose-500",
        progress: "from-rose-400 via-red-500 to-pink-400"
      }
    };
    return configs[priority as keyof typeof configs] || configs.high;
  };

  const priorityConfig = getPriorityConfig(task.priority);

  return (
    <motion.div
      variants={item}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative h-64 rounded-2xl bg-white/80 backdrop-blur-xl
        border border-gray-100 hover:border-gray-200 ${priorityConfig.border}
        transition-all duration-500 ease-out hover:-translate-y-1
        ${priorityConfig.glow} hover:shadow-xl`}
    >
      {/* Background Effects */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${priorityConfig.gradient} 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
      
      <div className="absolute inset-0 rounded-2xl bg-white/80 backdrop-blur-sm" />

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden rounded-t-2xl">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "0%" : "-70%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className={`h-full w-full bg-gradient-to-r ${priorityConfig.progress}`}
        />
      </div>

      {/* Content Container */}
      <div className="relative h-full p-5 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between space-x-4">
          <motion.h4 
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            className="font-semibold text-lg text-gray-800 line-clamp-1"
          >
            {task.title}
          </motion.h4>
          
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            className={`px-3 py-1.5 rounded-full text-xs font-medium text-white
              bg-gradient-to-r ${priorityConfig.badge} shadow-lg`}
          >
            {task.priority.toUpperCase()}
          </motion.div>
        </div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-gray-600 text-sm line-clamp-3"
        >
          {task.description}
        </motion.p>

        {/* Footer */}
        <div className="mt-auto space-y-4">
          {/* Timestamp */}
          <div className="flex items-center">
            <motion.span 
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              className="text-xs px-3 py-1.5 rounded-full bg-gray-100/70 
                backdrop-blur-sm text-gray-600 font-medium border border-gray-200/50
                group-hover:bg-gray-100 group-hover:border-gray-300/50 
                transition-all duration-300"
            >
              {formatTime(task.createdAt)}
            </motion.span>
          </div>

          {/* Action Buttons */}
          <AnimatePresence>
            <motion.div 
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex justify-end items-center gap-2"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 rounded-xl bg-gray-50/50 backdrop-blur-sm
                  border border-gray-100 hover:border-gray-200
                  text-gray-400 ${priorityConfig.icon}
                  transition-colors duration-300 hover:bg-white
                  ${task.completed ? 'text-yellow-500' : ''}`}
                aria-label="Toggle importance"
              >
                <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                  {star}
                </motion.div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 rounded-xl bg-gray-50/50 backdrop-blur-sm
                  border border-gray-100 hover:border-gray-200
                  text-gray-400 hover:text-blue-500
                  transition-colors duration-300 hover:bg-white`}
                onClick={() => {
                  getTask(task._id);
                  openModalForEdit(task);
                }}
                aria-label="Edit task"
              >
                <motion.div whileHover={{ rotate: 15 }}>
                  {edit}
                </motion.div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 rounded-xl bg-gray-50/50 backdrop-blur-sm
                  border border-gray-100 hover:border-gray-200
                  text-gray-400 hover:text-red-500
                  transition-colors duration-300 hover:bg-white`}
                onClick={() => deleteTask(task._id)}
                aria-label="Delete task"
              >
                <motion.div whileHover={{ scale: 1.1 }}>
                  {trash}
                </motion.div>
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default TaskItem;