"use client";

import dynamic from "next/dynamic";
import { Activity, Database, Radar, Waypoints } from "lucide-react";

const SignalChart = dynamic(
  () => import("@/components/charts/SignalChart").then((mod) => mod.SignalChart),
  {
    ssr: false,
    loading: () => <div className="chart-skeleton" aria-hidden="true" />,
  },
);

export function HeroAnalytics() {
  return (
    <div className="analytics-console">
      <div className="console-topbar">
        <div>
          <span className="console-dot" />
          <span className="console-dot" />
          <span className="console-dot" />
        </div>
        <p>analytics.workspace</p>
        <span>LIVE</span>
      </div>

      <div className="console-grid">
        <div className="console-primary">
          <div className="console-label">
            <span>Insight signal</span>
            <Activity aria-hidden="true" size={15} />
          </div>
          <div className="console-value">
            <strong>DATA</strong>
            <span>to decisions</span>
          </div>
          <SignalChart />
          <p className="chart-note">
            Illustrative interface signal — not performance data.
          </p>
        </div>

        <div className="console-side">
          <div className="mini-panel">
            <Database aria-hidden="true" />
            <span>Prepare</span>
            <small>clean · validate</small>
          </div>
          <div className="mini-panel">
            <Radar aria-hidden="true" />
            <span>Analyse</span>
            <small>model · compare</small>
          </div>
          <div className="mini-panel">
            <Waypoints aria-hidden="true" />
            <span>Communicate</span>
            <small>visualise · explain</small>
          </div>
        </div>
      </div>

      <div className="data-orbit" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
