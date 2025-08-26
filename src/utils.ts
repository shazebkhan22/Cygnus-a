import clsx from "clsx"; 
import { twMerge } from "tailwind-merge";

type ClassValue = Parameters<typeof clsx>[0]; // derive the type from clsx

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
