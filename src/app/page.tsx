import { Metadata } from 'next'

import Dashboard from './dashboard/page'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard Data',
}

const HomePage: React.FC = () => {
  return <Dashboard />
}

export default HomePage
