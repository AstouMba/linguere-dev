import { useEffect, useState } from 'react';

interface SnowflakeItem {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
  opacity: number;
}

const SnowEffect = () => {
  const [snowflakes, setSnowflakes] = useState<SnowflakeItem[]>([]);

  useEffect(() => {
    const snowflakeItems: SnowflakeItem[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 10 + Math.random() * 15,
      size: 3 + Math.random() * 5,
      delay: Math.random() * 10,
      opacity: 0.3 + Math.random() * 0.5,
    }));
    setSnowflakes(snowflakeItems);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${snowflake.left}%`,
            width: `${snowflake.size}px`,
            height: `${snowflake.size}px`,
            opacity: snowflake.opacity,
            animation: `${snowflake.id % 2 === 0 ? 'snowfall' : 'snowfall-2'} ${snowflake.animationDuration}s linear infinite`,
            animationDelay: `${snowflake.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SnowEffect;