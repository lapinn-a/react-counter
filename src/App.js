import { Route, Routes } from 'react-router-dom'

import Layout from './layouts/Layout'

import Counter from './components/Counter'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'

import "./styles.css";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Counter/>}/>
        <Route path={"/page2"} element={<Page2/>}/>
        <Route path={"/page3"} element={<Page3/>}/>
        <Route path={"/page4"} element={<Page4/>}/>
      </Routes>
    </Layout>
  )
}
