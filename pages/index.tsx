import { About, Blog } from '../features/Home'
import { MainLayout } from '@/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      {/* <Hero /> */}
      <About />
      <Blog />
    </MainLayout>
  )
}
