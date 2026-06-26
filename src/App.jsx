import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import BusinessPage from './BusinessPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/business" element={<BusinessPage />} />
      </Routes>
    </BrowserRouter>
  )
}
