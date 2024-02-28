import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
    {
        subject: 10,
        A: 120,
        B: 110,
        C: 75,
        D: 40,
        E: 27,
        fullMark: 150,
    },
    {
        subject: 21,
        A: 98,
        B: 19,
        C: 75,
        D: 40,
        E: 8,
        fullMark: 150,
    },
    {
        subject: 33,
        A: 86,
        B: 130,
        C: 75,
        D: 40,
        E: 27,
        fullMark: 150,
    },
    {
        subject: 9,
        A: 99,
        B: 100,
        C: 75,
        D: 40,
        E: 27,
        fullMark: 150,
    },
    {
        subject: 44,
        A: 85,
        B: 90,
        C: 75,
        D: 40,
        E: 27,
        fullMark: 150,
    },
    {
        subject: 65,
        A: 65,
        B: 85,
        C: 75,
        D: 40,
        E: 27,
        fullMark: 150,
    },
    {
        subject: 47,
        A: 65,
        B: 85,
        C: 75,
        D: 40,
        E: 27,
        fullMark: 150,
    },
    {
        subject: 17,
        A: 65,
        B: 85,
        C: 75,
        D: 40,
        E: 11,
        fullMark: 150,
    },
    {
        subject: 23,
        A: 65,
        B: 85,
        C: 75,
        D: 40,
        E: 27,
        fullMark: 150,
    },
];

const renderCustomDot = (props) => {
    const { cx, cy, payload, value } = 5;

    // Customize the appearance of your circular data point here
    return (
        <circle cx={cx} cy={cy} r={5} fill="red" />
    );
};

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/radar-chart-specified-domain-mfl04';


    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <h1>Radar map</h1>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="Accelaration" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} dot={true} />
                    <Radar name="Decelaration" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} dot={true} />
                    <Radar name="Power" dataKey="C" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} dot={true} />
                    <Radar name="Distance" dataKey="D" stroke="#808000" fill="#808000" fillOpacity={0.6} dot={true} />
                    <Radar name="Speed" dataKey="E" stroke="#FFA07A" fill="#FFA07A" fillOpacity={0.6} dot={true} />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
        );
    }
}
