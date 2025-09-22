import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Calculator from './pages/Calculator'
import News from './pages/News'
import Tips from './pages/Tips'
import AirQuality from './pages/AirQuality'
import Quotes from './pages/Quotes'
import FoodAnalyse from './pages/FoodAnalyse'
import DrugAnalyse from './pages/DrugAnalyse'



function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/calculator' element={<Calculator />} />
					<Route path='/news' element={<News />} />
					<Route path='/tips' element={<Tips />} />
					<Route path='/airquality' element={<AirQuality />} />
					<Route path='/quotes' element={<Quotes />} />
					<Route path='/foodanalyse' element={<FoodAnalyse />} />
					<Route path='/druganalyse' element={<DrugAnalyse />} />
				</Routes>
			</Layout>
		</Router>
	)
}

export default App
