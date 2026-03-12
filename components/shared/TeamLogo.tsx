// components/shared/TeamLogo.tsx — Displays a team's short name as a styled colored circle

interface TeamLogoProps {
  shortName: string;
  primaryColor: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-12 h-12 text-sm',
  lg: 'w-16 h-16 text-lg',
};

export default function TeamLogo({ shortName, primaryColor, size = 'md', className = '' }: TeamLogoProps) {
  return (
    <div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-bold font-rajdhani border-2 ${className}`}
      style={{
        backgroundColor: `${primaryColor}22`,
        borderColor: primaryColor,
        color: primaryColor,
      }}
    >
      {shortName.slice(0, 2)}
    </div>
  );
}
