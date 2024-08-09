import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ documents, urls, faqs }) => {
  let totalFiles = documents + urls + faqs;
  
  // const fi = files.map((item) => (totalFiles += item.files));
  const data = {
    labels: ['Documents', 'Youtube', 'FAQs'],

    datasets: [
      {
        data: [documents, urls, faqs],
        backgroundColor: ['#00A5FF', '#5542F6', '#20C9AC'],
        hoverOffset: 4,
        circumference: 180,
        rotation: 270,
        cutout: '80%',
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ position: 'relative' }}>
      <Doughnut
        data={data}
        options={options}
        className=''
      />
      <div
        style={{
          transform: 'translate(-50%, -50%)',
        }}
        className='absolute top-[60%] left-[50%] text-center'
      >
        <div className='text-darkgray2 text-base md:text-lg font-semibold font-Manrope'>
          {totalFiles} items
        </div>
        {/* <div className="text-lightgray4 font-medium text-xs md:text-sm">
          Used Of 15 GB
        </div> */}
      </div>
    </div>
  );
};

export default DoughnutChart;
