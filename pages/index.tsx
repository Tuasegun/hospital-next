import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import {Hero, About} from '../features/Home'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <About /> */}
    </>
  )
}
