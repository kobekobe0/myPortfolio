import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projects from './components/projects/Projects'
import ProjectPage from './components/projects/ProjectPage'
import { useLocation } from 'react-router-dom'
import Gallery from './components/gallery/Gallery'
import About from './components/about/About'
import Contact from './components/contact/Contact'

function App() {
    const location = useLocation()
    console.log(location.pathname)
    const [openProject, setOpenProject] = useState('')
    return (
        <div className="App">
            {location.pathname.includes('/Projects') && (
                <h2 className="headers" style={{ color: 'black' }}>
                    Projects
                </h2>
            )}
            {location.pathname.includes('/Projects/') && (
                <h2 className="headers" style={{ color: 'white' }}>
                    Projects
                </h2>
            )}
            {location.pathname.includes('/Contact') && (
                <h2 className="headers" style={{ color: 'black' }}>
                    Contact Me
                </h2>
            )}
            {location.pathname.includes('/About') && (
                <h2 className="headers" style={{ color: 'black' }}>
                    About
                </h2>
            )}
            <Nav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/Projects"
                    element={<Projects setOpenProject={setOpenProject} />}
                />
                <Route
                    path="/Projects/:id"
                    element={<ProjectPage openProject={openProject} />}
                />
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default App
