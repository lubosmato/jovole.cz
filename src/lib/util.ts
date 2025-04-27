import { clsx, type ClassValue } from "clsx"
import type { CollectionSlug, GeneratedTypes } from "payload"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function unwrapRelation<T extends GeneratedTypes["collections"][CollectionSlug]>(
  relation: T | number,
) {
  if (typeof relation === "number") {
    throw new Error("relation field is number")
  }
  return relation
}
