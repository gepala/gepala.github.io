import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert number to Roman numeral
export function toRomanNumeral(num: number): string {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";
  let remaining = num;

  for (const { value, numeral } of romanNumerals) {
    while (remaining >= value) {
      result += numeral;
      remaining -= value;
    }
  }

  return result;
}

// Format member number: NTAG 16 XXXV 345 TAAB
export function formatMemberNumber(
  cohort: string,
  memberNumber: string
): string {
  const cohortNum = parseInt(cohort);
  const romanCohort = toRomanNumeral(cohortNum);
  return `NTAG 16 ${romanCohort} ${memberNumber} TAAB`;
}

// Format cohort display for badges
export function formatCohortDisplay(cohorts: string[]): string {
  return cohorts.map((cohort) => toRomanNumeral(parseInt(cohort))).join(", ");
}
