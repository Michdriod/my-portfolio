"use client";

import Image from "next/image";
import { useState } from "react";

interface AvatarProps {
  size?: "sm" | "md" | "lg" | "xl";
  name: string;
  className?: string;
}

const sizeClasses = {
  sm: "w-12 h-12 text-sm",
  md: "w-20 h-20 text-xl",
  lg: "w-32 h-32 text-4xl",
  xl: "w-48 h-48 text-6xl",
};

const sizesValues = {
  sm: "48px",
  md: "80px",
  lg: "128px",
  xl: "192px",
};

export default function Avatar({ size = "md", name, className = "" }: AvatarProps) {
  const [imageError, setImageError] = useState(false);
  const [imageExists, setImageExists] = useState(true);

  // Get initials from name (e.g., "Michael Alejo" -> "MA")
  const getInitials = (fullName: string): string => {
    const names = fullName.trim().split(" ");
    if (names.length === 0) return "?";
    if (names.length === 1) return names[0][0].toUpperCase();
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
  };

  const initials = getInitials(name);
  const sizeClass = sizeClasses[size];

  // Try to load avatar image, fallback to initials if not found
  const avatarPath = "/avatar.jpg"; // Could also try /avatar.png

  if (imageError || !imageExists) {
    // Show initials fallback
    return (
      <div
        className={`${sizeClass} ${className} rounded-full bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 flex items-center justify-center text-white font-bold shadow-lg`}
      >
        {initials}
      </div>
    );
  }

  // Try to show image
  return (
    <div className={`${sizeClass} ${className} relative rounded-full overflow-hidden shadow-lg`}>
      <Image
        src={avatarPath}
        alt={`${name}'s profile photo`}
        fill
        sizes={sizesValues[size]}
        className="object-cover"
        priority
        onError={() => {
          setImageError(true);
          setImageExists(false);
        }}
      />
    </div>
  );
}
