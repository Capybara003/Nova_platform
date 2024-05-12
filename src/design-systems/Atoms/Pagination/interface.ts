/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PaginationProps {
  onPageChange: (value: any) => void
  pageCount: number
}
export interface PageClickEvent {
  selected: number
}
