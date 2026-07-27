"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { useReducedMotion } from "motion/react";

const signal = [
  { step: "01", value: 18 },
  { step: "02", value: 31 },
  { step: "03", value: 27 },
  { step: "04", value: 46 },
  { step: "05", value: 39 },
  { step: "06", value: 55 },
  { step: "07", value: 49 },
  { step: "08", value: 62 },
];

export function SignalChart() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="signal-chart" aria-hidden="true">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={signal} margin={{ top: 10, right: 4, left: 4, bottom: 0 }}>
          <defs>
            <linearGradient id="signalFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9b52ef" stopOpacity={0.68} />
              <stop offset="100%" stopColor="#9b52ef" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#392a42" strokeDasharray="2 7" vertical={false} />
          <XAxis
            axisLine={false}
            dataKey="step"
            tick={{ fill: "#887d8e", fontSize: 10 }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              background: "#171019",
              border: "1px solid #75409e",
              borderRadius: 8,
              color: "#f5effa",
              fontSize: 12,
            }}
            cursor={{ stroke: "#a967ef", strokeDasharray: "3 3" }}
            formatter={(value) => [`${value}`, "Decorative signal"]}
            labelFormatter={(label) => `Point ${label}`}
          />
          <Area
            animationDuration={1100}
            dataKey="value"
            fill="url(#signalFill)"
            isAnimationActive={!shouldReduceMotion}
            stroke="#b56bff"
            strokeWidth={2}
            type="monotone"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
