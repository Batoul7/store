import { useEffect, useState } from "react";

export const Counter = ({ end, label }: { end: number; label: string }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let start = 0;
      const duration = 2000;
      const increment = Math.ceil(end / (duration / 50));
  
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, 50);
  
      return () => clearInterval(timer);
    }, [end]);
  
    return (
      <div className="text-center text-blue-500 font-semibold text-2xl bg-white shadow-sm shadow-blue-400 p-2">
        {count}+ <span className="block text-sm text-gray-600">{label}</span>
      </div>
    );
  };