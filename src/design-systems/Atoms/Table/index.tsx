'use client'

import React from 'react'

import Typography from '../Typography'

interface ColumnProps<T> {
  name: string
  selector: (item: T) => React.ReactNode
  width?: string
  align?: 'left' | 'right' | 'center'
  headingClassName?: string | ((item: T) => string)
  itemClassName?: string | ((item: T) => string)
  headingWrapperClassName?: string
  itemWrapperClassName?: string
}

export interface TableProps<T> {
  data: T[]
  columns: ColumnProps<T>[]
  className?: string
  headingClassName?: string
  itemClassName?: string
  headingWrapperClassName?: string
  itemWrapperClassName?: string
}

function Table<T>({
  columns,
  data,
  className,
  headingClassName,
  itemClassName,
  headingWrapperClassName,
  itemWrapperClassName,
}: TableProps<T>): JSX.Element {
  return (
    <div className="w-full overflow-x-scroll">
      <table className={`w-[1400px] md:!w-full ${className}`}>
        <thead>
          <tr>
            {columns.map((column, index) => {
              return (
                <th
                  className={`${headingWrapperClassName ? headingWrapperClassName : ''} ${
                    column.headingWrapperClassName ? column.headingWrapperClassName : ''
                  }`}
                  key={index}
                  style={{ width: column.width, textAlign: column.align }}
                >
                  <Typography
                    className={`${headingClassName ? headingClassName : ''} ${
                      column.headingClassName ? column.headingClassName : ''
                    } !w-full text-center`}
                  >
                    {column.name}
                  </Typography>
                </th>
              )
            })}
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr className="" key={index}>
                {columns.map((column, index) => {
                  return (
                    <td
                      className={`${column.itemWrapperClassName ? column.itemWrapperClassName : ''} ${
                        itemWrapperClassName ? itemWrapperClassName : ''
                      }`}
                      key={index}
                      style={{ width: column.width, textAlign: column.align }}
                    >
                      <Typography
                        className={`!w-full ${itemClassName ? itemClassName : ''} ${
                          column.itemClassName
                            ? typeof column.itemClassName === 'string'
                              ? column.itemClassName
                              : column.itemClassName(item)
                            : ''
                        }`}
                        size="md"
                      >
                        {column.selector(item)}
                      </Typography>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
