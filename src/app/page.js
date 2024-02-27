
'use client'
import { LineChart, Line } from 'recharts';
import Example from '@/pages/radarchart';







export default function Home() {

  const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page B', uv: 450, pv: 2400, amt: 2400 }, { name: 'Page C', uv: 500, pv: 2400, amt: 2400 }, { name: 'Page D', uv: 200, pv: 2780, amt: 2550 }];





  return (
    <div style={{height:500}}>
      <Example></Example>
    </div>
  );
}
