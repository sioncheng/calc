import React from "react";

import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import Title from "../Title/Title";
import { monthData } from "../../constants/index";

const CustomBarChart = () => {
    return (<div className="h-[500px] w-full rounded-xl bg-white p-5 pb-20 dark:bg-slate-600 dark:text-slate-300 xl:flex-1">
        <Title>Sales and Revenue</Title>
        <ResponsiveContainer>
            <BarChart data={monthData}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Bar dataKey="sales" fill="#747474"/>
                <Bar dataKey="revenue" fill="#8e8e8e"/>
            </BarChart>
        </ResponsiveContainer>
    </div>);
};

export default CustomBarChart;