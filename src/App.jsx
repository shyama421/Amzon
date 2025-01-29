import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './pages/product'
import ProductCard from './pages/Home/productcard'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';


const App = () => {

  return (
    <>
      <MantineProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductCard />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>

    </>

  )
}

export default App
