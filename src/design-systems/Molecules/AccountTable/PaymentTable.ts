interface PaymentTableProps {
  data: {
    id: number
    aboType: string
    date: string
    duration: string
    expiration: string
    amount: string
    method: string
  }[]
}

export default PaymentTableProps
