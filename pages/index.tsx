import { Footer, Navbar } from '@/components'
import { Hero, About, Blog } from '../features/Home'

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <About />
      <Blog />
      <Footer />
    </>
  )
}
