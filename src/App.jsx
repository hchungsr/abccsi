import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import ServicesPage from './ServicesPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  )
}
