import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Card3D from './Card3D';

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  suffix?: string;
  description: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value, suffix = '+', description }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Card3D className="bg-[#0A1A2F] p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
      <div ref={ref} className="text-center">
        <div className="text-blue-400 mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <div className="text-4xl font-bold text-blue-400 mb-3">
          {inView ? (
            <CountUp end={value} duration={2.5} suffix={suffix} />
          ) : (
            <span>0{suffix}</span>
          )}
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    </Card3D>
  );
};

export default StatsCard;