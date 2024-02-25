
'use client'
import { LineChart, Line } from 'recharts';







export default function Home() {

  const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page B', uv: 450, pv: 2400, amt: 2400 }, { name: 'Page C', uv: 500, pv: 2400, amt: 2400 }, {name: 'Page D', uv: 200, pv: 2780, amt: 2550}];





  return (
    <div >
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
