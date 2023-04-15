import { Fragment, PropsWithChildren } from 'react'

import { Footer, Navbar } from '@/components'

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  )
}
