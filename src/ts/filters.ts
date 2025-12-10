import type { Entry } from "./types"

export const filterByStartDateDesc = (a: Entry, b: Entry) => {
    return a.startDate.getTime() - b.startDate.getTime();
}

export const filterByStartDateAsc = (a: Entry, b: Entry) => {
    return a.startDate.getTime() + b.startDate.getTime();
}

export const filterByEndDateDesc = (a: Entry, b: Entry) => {
    if (typeof a.endDate === 'string' || typeof b.endDate === 'string')  return -1;
    return a.endDate.getTime() - b.endDate.getTime();
}

export const filterByEndDateAsc = (a: Entry, b: Entry) => {
    if (typeof a.endDate === 'string' || typeof b.endDate === 'string')  return 0;
    return a.endDate.getTime() + b.endDate.getTime();
}

export const filterThreeNewest = (entryArray: Entry[]) => {
    const filteredEndDesc = [...entryArray].sort(filterByEndDateAsc)

    return filteredEndDesc.slice(0, 3);
}