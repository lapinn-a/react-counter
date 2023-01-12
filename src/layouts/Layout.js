import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
  return (
    <div className="App">
      <main className="main">
        <Navbar>
          { children }
        </Navbar>
        <div className="page">
          { children }
        </div>
      </main>
    </div>
  )
}

export default Layout;