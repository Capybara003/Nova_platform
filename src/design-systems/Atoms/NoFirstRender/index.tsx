import React from 'react'
import { PropsWithChildren, useState, useEffect } from 'react'

import Spinner from '../Spinner'

const NoFirstRender: React.FC<PropsWithChildren> = ({ children }) => {
  const [hydrated, setHydrated] = useState<boolean>(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  return <>{hydrated ? children : <Spinner />}</>
}

export default NoFirstRender
