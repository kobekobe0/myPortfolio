import React, { useEffect } from 'react'
import './projects.css'
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in'
import { projectData } from './ProjectData'

function Projects(props) {
    const [data, setData] = React.useState(projectData)
    useEffect(() => {
        setData(projectData)
    }, [projectData])
    return (
        <>
            <div className="projects">
                <FadeIn className="projects-wrapper">
                    {data.map((project, index) => (
                        <div className="card">
                            <img src={project.photos[index]} alt="" />
                            <div className="card-content">
                                <h3>{project.title}</h3>
                                <div className="tools-text">
                                    {project.toolsText.map((tool, index) => (
                                        <p key={index}>{tool}</p>
                                    ))}
                                </div>

                                <p>
                                    {project.description.substring(0, 120)}...
                                </p>
                                <div className="project-btn">
                                    <Link
                                        to={`/Projects/${project.id}`}
                                        onClick={() =>
                                            props.setOpenProject(project.title)
                                        }
                                    >
                                        More details
                                    </Link>
                                    <a href={project.link} target="_blank">
                                        Visit
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </FadeIn>
            </div>{' '}
            <footer
                style={{
                    height: '20rem',
                    fontFamily: 'Roboto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'auto',
                    fontSize: '1.3rem',
                    backgroundColor: 'rgb(8, 4, 19, 0.9)',
                    color: 'white',
                }}
            >
                <p>© 2022 by Kobe Brian Santos. Created with React v18.</p>
            </footer>
        </>
    )
}

export default Projects
