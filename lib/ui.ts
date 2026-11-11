import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: Array<string | false | null | undefined>) {
  return twMerge(clsx(inputs));
}

export const BRAND = 'ShadowSpark Express';
export const COMPANY = 'ShadowSpark Technologies';
export const SUPPORT = '+234 1 700 0000';

export function ngn(v: number): string {
  return `₦${v.toLocaleString('en-NG')}`;
}
