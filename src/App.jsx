// Bootstrap 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// Pages 
import Navbar from './Pages/Navbar'
import Layout from './Pages/Layout'
import Footer from './Pages/Footer'

function App() {


  return (
    <>
      <Navbar />
      <Layout />
      <Footer />
    </>
  )
}

export default App
