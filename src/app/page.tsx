'use client';
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { monthlyRainfallChart, pieRainRegions } from './data';
import Link from 'next/link';
import { IconBrandGithub } from '@tabler/icons-react';
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import type { ChartProps } from '@/components/FusionChartsClient';

const FusionChart = dynamic(() => import('@/components/FusionChartsClient'), {
  ssr: false,
}) as ComponentType<ChartProps>;

export default function Home() {
  return (
    <div className='min-h-screen bg-stone-500 flex items-center justify-center p-4'>
      <Card className='w-screen max-w-6xl shadow-lg bg-stone-400'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-center'>
            Jour de pluie
          </CardTitle>
          <CardDescription className='text-center'>
            FusionChart / Next.js / TailwindCSS / Shadcn UI / TypeScript /
            Vercel
          </CardDescription>
          <Button
            className='mt-4 w-full flex items-center justify-center gap-2'
            variant='outline'
            asChild
          >
            <Link
              href='https://github.com/Tinmarrrr/fusionCharts'
              target='https://github.com/Tinmarrrr/fusionCharts'
            >
              <IconBrandGithub />
              Tinmarrrr/fusionCharts
            </Link>
          </Button>
        </CardHeader>

        <CardContent className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='w-full overflow-hidden rounded-lg'>
            <FusionChart {...monthlyRainfallChart} />
          </div>

          <div className='w-full overflow-hidden rounded-lg'>
            <FusionChart {...pieRainRegions} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
