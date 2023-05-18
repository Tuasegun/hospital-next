import { MainLayout } from '@/layouts'
import { About, Blog } from '../features/Home'

export default function Home() {
  return (
    <MainLayout>
      {/* <Hero /> */}
      <About />
      <Blog />
    </MainLayout>
  )
}
