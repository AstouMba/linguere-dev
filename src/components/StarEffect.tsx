import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface StarItem {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
  color: string;
  twinkleDuration: number;
}

const StarEffect = () => {
  const [stars, setStars] = useState<StarItem[]>([]);

  useEffect(() => {
    const colors = [
      'text-primary',
      'text-accent', 
      'text-primary-glow',
      'text-yellow-400',
      'text-cyan-400'
    ];
    
    const starItems: StarItem[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 15 + Math.random() * 15,
      size: 12 + Math.random() * 16,
      delay: Math.random() * 15,
      color: colors[Math.floor(Math.random() * colors.length)],
      twinkleDuration: 2 + Math.random() * 3,
    }));
    setStars(starItems);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute ${star.color}`}
          style={{
            left: `${star.left}%`,
            animation: `${star.id % 2 === 0 ? 'snowfall' : 'snowfall-2'} ${star.animationDuration}s linear infinite, twinkle ${star.twinkleDuration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        >
          <Star 
            size={star.size} 
            fill="currentColor"
            className="drop-shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default StarEffect;
