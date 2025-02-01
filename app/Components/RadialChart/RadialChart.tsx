// "use client";
// import { TrendingUp } from "lucide-react";
// import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";
// import { useTasks } from "@/context/taskContext";

// export const description = "A radial chart with stacked sections";

// const chartConfig = {
//   desktop: {
//     label: "Completed",
//     color: "#8BCE89",
//   },
//   mobile: {
//     label: "Pending",
//     color: "#EB4E31",
//   },
// } satisfies ChartConfig;

// function RadialCHart() {
//   const { tasks, completedTasks, activeTasks } = useTasks();
//   const tasksTotal = tasks.length;

//   const chartData = [
//     {
//       pending: activeTasks.length,
//       completed: completedTasks.length,
//     },
//   ];

//   return (
//     <Card className="flex flex-col border-2 border-white shadow-none bg-[#EDEDED]">
//       <CardHeader className="items-center pb-0">
//         <CardTitle>Comleted vs Pending Tasks</CardTitle>
//         <CardDescription>Task completion status.</CardDescription>
//       </CardHeader>
//       <CardContent className="flex flex-1 items-center pb-0">
//         <ChartContainer
//           config={chartConfig}
//           className="mx-auto aspect-square w-full max-w-[250px]"
//         >
//           <RadialBarChart
//             data={chartData}
//             endAngle={180}
//             innerRadius={80}
//             outerRadius={130}
//           >
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//             <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
//               <Label
//                 content={({ viewBox }) => {
//                   if (viewBox && "cx" in viewBox && "cy" in viewBox) {
//                     return (
//                       <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
//                         <tspan
//                           x={viewBox.cx}
//                           y={(viewBox.cy || 0) - 16}
//                           className="fill-foreground text-2xl font-bold"
//                         >
//                           {tasksTotal}
//                         </tspan>
//                         <tspan
//                           x={viewBox.cx}
//                           y={(viewBox.cy || 0) + 4}
//                           className="fill-muted-foreground"
//                         >
//                           Tasks
//                         </tspan>
//                       </text>
//                     );
//                   }
//                 }}
//               />
//             </PolarRadiusAxis>
//             <RadialBar
//               dataKey="completed"
//               stackId="a"
//               cornerRadius={5}
//               fill="var(--color-desktop)"
//               className="stroke-transparent stroke-2"
//             />
//             <RadialBar
//               dataKey="pending"
//               fill="var(--color-mobile)"
//               stackId="a"
//               cornerRadius={5}
//               className="stroke-transparent stroke-2"
//             />
//           </RadialBarChart>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter className="flex-col gap-2 text-sm">
//         <div className="flex items-center gap-2 font-medium leading-none">
//           Task completion improved by 12% this month{" "}
//           <TrendingUp className="h-4 w-4" />
//         </div>
//         <div className="leading-none text-muted-foreground">
//           Analysis based on tasks completed in the last 30 days.
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }

// export default RadialCHart;


// import React from 'react';
// import { Activity, Check, Clock } from 'lucide-react';
// import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from '@/components/ui/chart';
// import { useTasks } from '@/context/taskContext';

// const chartConfig = {
//   completed: {
//     label: "Completed",
//     color: "#6366f1"  // Indigo
//   },
//   pending: {
//     label: "Pending",
//     color: "#ec4899"  // Pink
//   },
// } satisfies ChartConfig;

// const RadialChart = () => {
//   const { tasks, completedTasks, activeTasks } = useTasks();
//   const tasksTotal = tasks.length;
//   const completionRate = Math.round((completedTasks.length / tasksTotal) * 100) || 0;

//   const chartData = [
//     {
//       pending: activeTasks.length,
//       completed: completedTasks.length,
//     },
//   ];

//   return (
//     <Card className="relative overflow-hidden border-0 bg-slate-900 text-white max-w-md">
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-slate-900 to-slate-900" />
      
//       <CardHeader className="relative space-y-1 p-6 pb-0">
//         <div className="flex items-center justify-between">
//           <CardTitle className="flex items-center gap-2 text-xl font-bold">
//             <Activity className="h-5 w-5 text-indigo-400" />
//             Progress Tracker
//           </CardTitle>
//           <span className="rounded-full bg-slate-800/50 px-3 py-1 text-sm font-medium text-indigo-300">
//             30 Days
//           </span>
//         </div>
//         <CardDescription className="text-sm text-slate-400">
//           Task completion overview
//         </CardDescription>
//       </CardHeader>
      
//       <CardContent className="relative p-6">
//         <ChartContainer
//           config={chartConfig}
//           className="mx-auto aspect-square w-full max-w-[280px]"
//         >
//           <RadialBarChart
//             data={chartData}
//             endAngle={180}
//             innerRadius={85}
//             outerRadius={130}
//             barSize={18}
//             startAngle={0}
//           >
//             <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
//               <Label
//                 content={({ viewBox }) => {
//                   if (viewBox && "cx" in viewBox && "cy" in viewBox) {
//                     return (
//                       <g>
//                         <text 
//                           x={viewBox.cx} 
//                           y={(viewBox.cy || 0) - 15} 
//                           textAnchor="middle"
//                           className="fill-white text-3xl font-bold"
//                         >
//                           {completionRate}%
//                         </text>
//                         <text
//                           x={viewBox.cx}
//                           y={(viewBox.cy || 0) + 12}
//                           textAnchor="middle"
//                           className="fill-slate-400 text-sm"
//                         >
//                           Complete
//                         </text>
//                       </g>
//                     );
//                   }
//                 }}
//               />
//             </PolarRadiusAxis>
//             <RadialBar
//               dataKey="completed"
//               stackId="a"
//               cornerRadius={10}
//               fill="var(--color-completed)"
//               className="stroke-transparent stroke-2"
//             />
//             <RadialBar
//               dataKey="pending"
//               stackId="a"
//               cornerRadius={10}
//               fill="var(--color-pending)"
//               className="stroke-transparent stroke-2"
//             />
//           </RadialBarChart>
//         </ChartContainer>

//         <div className="mt-6 grid grid-cols-2 gap-3">
//           <div className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3">
//             <div className="rounded-full bg-indigo-500/20 p-2">
//               <Check className="h-4 w-4 text-indigo-400" />
//             </div>
//             <div>
//               <p className="text-sm font-medium text-indigo-300">{completedTasks.length}</p>
//               <p className="text-xs text-slate-400">Done</p>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3">
//             <div className="rounded-full bg-pink-500/20 p-2">
//               <Clock className="h-4 w-4 text-pink-400" />
//             </div>
//             <div>
//               <p className="text-sm font-medium text-pink-300">{activeTasks.length}</p>
//               <p className="text-xs text-slate-400">Pending</p>
//             </div>
//           </div>
//         </div>
//       </CardContent>

//       <CardFooter className="relative border-t border-slate-800 bg-slate-800/50 p-4">
//         <div className="flex w-full items-center justify-between text-sm">
//           <span className="text-slate-400">
//             Performance vs Last Month
//           </span>
//           <span className="font-medium text-indigo-300">
//             +12% Improvement
//           </span>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// };

// export default RadialChart;

import React from 'react';
import { Activity, Check, Clock } from 'lucide-react';
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useTasks } from '@/context/taskContext';

const chartConfig = {
  completed: {
    label: "Completed",
    color: "#6366f1"  // Indigo
  },
  pending: {
    label: "Pending",
    color: "#ec4899"  // Pink
  },
} satisfies ChartConfig;

const RadialChart = () => {
  const { tasks, completedTasks, activeTasks } = useTasks();
  const tasksTotal = tasks.length;
  const completionRate = Math.round((completedTasks.length / tasksTotal) * 100) || 0;

  const chartData = [
    {
      pending: activeTasks.length,
      completed: completedTasks.length,
    },
  ];

  return (
    <Card className="relative overflow-hidden border-0 bg-slate-900 text-white max-w-sm">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-slate-900 to-slate-900" />
      
      <CardHeader className="relative space-y-1 p-4 pb-0">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg font-bold">
            <Activity className="h-4 w-4 text-indigo-400" />
            Progress Tracker
          </CardTitle>
          <span className="rounded-full bg-slate-800/50 px-2 py-1 text-xs font-medium text-indigo-300">
            30 Days
          </span>
        </div>
        <CardDescription className="text-xs text-slate-400">
          Task completion overview
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative ">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[180px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={65}
            outerRadius={100}
            barSize={14}
            startAngle={0}
          >
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <g>
                        <text 
                          x={viewBox.cx} 
                          y={(viewBox.cy || 0) - 12} 
                          textAnchor="middle"
                          className="fill-white text-2xl font-bold"
                        >
                          {completionRate}%
                        </text>
                        <text
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 10}
                          textAnchor="middle"
                          className="fill-slate-400 text-xs"
                        >
                          Complete
                        </text>
                      </g>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="completed"
              stackId="a"
              cornerRadius={8}
              fill="var(--color-completed)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="pending"
              stackId="a"
              cornerRadius={8}
              fill="var(--color-pending)"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>

        <div className=" grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 rounded-lg bg-slate-800/50 p-2">
            <div className="rounded-full bg-indigo-500/20 p-1.5">
              <Check className="h-3 w-3 text-indigo-400" />
            </div>
            <div>
              <p className="text-xs font-medium text-indigo-300">{completedTasks.length}</p>
              <p className="text-xs text-slate-400">Done</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 rounded-lg bg-slate-800/50 p-2">
            <div className="rounded-full bg-pink-500/20 p-1.5">
              <Clock className="h-3 w-3 text-pink-400" />
            </div>
            <div>
              <p className="text-xs font-medium text-pink-300">{activeTasks.length}</p>
              <p className="text-xs text-slate-400">Pending</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RadialChart;