'use client';

import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts';

export interface ChartProps {
  type: string;
  width: string;
  height: string;
  dataFormat: string;
  dataSource: unknown;
}

const ReactFCTyped = ReactFC as unknown as React.ComponentType<ChartProps> & {
  fcRoot: (...args: unknown[]) => void;
};

ReactFCTyped.fcRoot(FusionCharts, Charts, FusionTheme);

export default function FusionChart(props: ChartProps) {
  return <ReactFCTyped {...props} />;
}

/* 
This part was quickly made by an LLM just to prevent build issues. 
This project is only meant to test FusionCharts and Shadcn with Next.js.

Explanations:
- 'use client' is used because FusionCharts needs window/document (not available in SSR).
- ReactFC isn’t typed as a normal JSX component in TypeScript, 
  so it is cast to React.ComponentType<ChartProps>.
- fcRoot registers the FusionCharts library, chart modules, and theme.
- ReactFC is wrapped in a typed FusionChart component to make it easier to use.
- Using dynamic import with { ssr: false } ensures it only renders on the client 
  and avoids "document is not defined" errors.
*/