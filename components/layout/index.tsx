// import Header from './../UI/organisms/header/Header'
import Footer from './../UI/organisms/footer/Footer'
import Loader from '../../components/UI/atoms/loader/Loader'
import { Fragment, ReactNode, useEffect, useState } from 'react'
// import { menuDefault } from './../../consts/menu'
import dynamic from 'next/dynamic'
// import Notificar from '../UI/atoms/notificar/Notificar'

const Header = dynamic(() => import('./../UI/organisms/header/Header'), {
  ssr: false,
})

interface Props {
  children: ReactNode
}

const Index = ({ children }: Props) => {
  const [Loading, setloading] = useState(true)
  const obj = { keyA: 0 }
  useEffect(() => {
  }, [obj.keyA])

  return (
    <Fragment>
      <Loader loading={Loading} />
      <Header
        imagePros={undefined}
        welcomeProps={undefined}
      />
      {/* <Navigation menu={menuDefault} /> */}
      {/* <Notificar
        state={objNotificar.state}
        message={objNotificar.message}
      /> */}
      <div className="container">{children}</div>
      <Footer />
    </Fragment>
  )
}

export default Index
