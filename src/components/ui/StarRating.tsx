'use client';
// src/components/ui/StarRating.tsx

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
}

export default function StarRating({
  rating,
  reviewCount,
  size = 'sm',
  showCount = true,
}: StarRatingProps) {
  const sizeClasses = { sm: 'text-sm', md: 'text-base', lg: 'text-lg' };
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;

  return (
    <div className="flex items-center gap-1">
      <div className={`flex items-center ${sizeClasses[size]}`}>
        {Array.from({ length: 5 }, (_, i) => {
          if (i < full) return <span key={i} className="star-filled">★</span>;
          if (i === full && hasHalf) return <span key={i} className="star-filled opacity-60">★</span>;
          return <span key={i} className="star-empty">★</span>;
        })}
      </div>
      {showCount && reviewCount !== undefined && (
        <span className="text-xs text-[#6B4C3B] font-sans">({reviewCount})</span>
      )}
    </div>
  );
}
