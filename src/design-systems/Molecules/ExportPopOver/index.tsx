import React from 'react'
import { TEPopover, TEPopoverToggler, TEPopoverContent } from 'tw-elements-react'
import { FaFileCsv, FaFileExcel, FaFilePdf } from 'react-icons/fa'
import { CSVLink } from 'react-csv'
import { Data } from 'react-csv/lib/core'
import * as XLSX from 'xlsx'
import html2pdf from 'html2pdf.js'
import { toast } from 'react-toastify'

import { ExportIcons } from 'design-systems/Atoms/Icons'

interface ExportPopOverProps {
  data: Data
  headers?: { key: string; label: string }[]
  filename: string
  tableIdForPdf: string
}

const ExportPopOver: React.FC<ExportPopOverProps> = ({ data, headers, filename, tableIdForPdf }) => {
  const handleExportExcel = () => {
    if (!data) {
      return toast.warn('Please provide data.')
    }
    const ws = XLSX.utils.json_to_sheet(data)

    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1')

    XLSX.writeFile(wb, `${filename}.xlsx`)
  }

  const handleExportPDF = () => {
    if (!tableIdForPdf) {
      return toast.warn('Please provide table id.')
    }
    const elem = document.getElementById(tableIdForPdf) as HTMLElement
    const options = {
      margin: 10,
      filename: `${filename}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
    }

    html2pdf(elem, options)
  }

  return (
    <>
      <TEPopover className="flex-1 md:!flex-none" trigger="focus">
        <TEPopoverToggler className="flex w-full flex-row items-center justify-center gap-2 rounded bg-blackCardBg p-3">
          Export
          <ExportIcons />
        </TEPopoverToggler>

        <TEPopoverContent placement="top">
          <div className="flex space-x-4 rounded-md bg-[#0c0a14] p-3">
            <CSVLink data={data} filename={`${filename}.csv`} headers={headers}>
              <button className="text-white hover:bg-blue-600 flex h-10 w-10 items-center justify-center rounded-full bg-[#18] focus:outline-none">
                <FaFileCsv className="text-subtitle" />
              </button>
            </CSVLink>

            <button
              className="text-white hover:bg-green-600 flex h-10 w-10 items-center justify-center rounded-full bg-[#18] focus:outline-none"
              onClick={handleExportExcel}
            >
              <FaFileExcel className="text-subtitle" />
            </button>

            <button
              className="text-white hover:bg-red-600 flex h-10 w-10 items-center justify-center rounded-full bg-[#18] focus:outline-none"
              onClick={handleExportPDF}
            >
              <FaFilePdf className="text-subtitle" />
            </button>
          </div>
        </TEPopoverContent>
      </TEPopover>
    </>
  )
}

export default ExportPopOver
