import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cropDescription(description: string): string {
  const maxWords = 50;

  // Split the description into words
  const words = description.trim().split(/\s+/);

  // If the description is already within the limit, return it as-is
  if (words.length <= maxWords) {
    return description;
  }

  // Crop to the maximum number of words
  const croppedDescription = words.slice(0, maxWords).join(" ");

  // Add ellipsis to indicate truncation
  return `${croppedDescription}...`;
}
