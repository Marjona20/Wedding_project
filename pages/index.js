import Head from 'next/head'
import Dashboard from "../containers/Dashboard"
import Inputs from './inputs'
import Circle from './circle'
import First from './firstImg'
import Img_text from './Img_text'
import Artist from './artists'
import Img_text_2 from './Img_text_2'
import Cards from './cards'
import Photo_3 from './photo_3'
import Footer from './footer'

export default function Home() {
  return (
    <section>
    <Head>
        <title>Wedding nextjs</title>
        <meta name="description" content="Generated by create next app" />
    </Head>
      <Dashboard />
      <First />
      <Inputs />
      <Circle />
      <Img_text />
      <Artist />
      <Img_text_2 />
      <Cards />
      <Photo_3 />
      <Footer />
      </section>
  )
}
