import React, { useEffect } from 'react'
import { projectData } from './ProjectData'
import { useLocation } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

function ProjectPage(props) {
    const location = useLocation()
    const path = location.pathname.substring(10)
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const getData = () => {
        const data = projectData.filter((project) => project.id === path)
        setData(data[0])
        setLoading(false)
    }
    useEffect(() => {
        getData()
    }, [props])
    console.log(data)
    if (loading)
        return (
            <Spinner
                animation="grow"
                size={50}
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                }}
            />
        )
    if (!loading)
        return (
            <div className="project-page">
                <div className="project-page-wrapper">
                    <div className="project-page-header">
                        <h2 className="project-page-title">{data.title}</h2>
                        <a href={data.link} target="_blank">
                            Visit
                        </a>
                    </div>

                    <div className="project-page-description">
                        <p>{data.description}</p>
                    </div>

                    <div className="carousel-wrapper">
                        <h3>Screenshots</h3>
                        <div className="project-page-carousel">
                            {data.photos.map((photo, index) => (
                                <img key={index} src={photo} alt="" />
                            ))}
                        </div>
                    </div>

                    <div className="project-page-tools">
                        <hr
                            style={{
                                width: '100%',
                                backgroundColor: 'rgb(43, 43, 43)',
                                height: '   1px',
                                border: 'none',
                            }}
                        />
                        <br />
                        <h3 className="project-page-tools-header">
                            Built with
                        </h3>
                        <br />
                        <br />

                        <div className="tools">
                            {data.tools.map((tool, index) => (
                                <img key={index} src={tool} />
                            ))}
                        </div>
                    </div>
                </div>
                <footer
                    style={{
                        height: '20rem',
                        fontFamily: 'Roboto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        fontSize: '1.3rem',
                        backgroundColor: 'rgb(8, 4, 19)',
                        color: 'white',
                    }}
                >
                    <p>© 2022 by Kobe Brian Santos. Created with React v18.</p>
                </footer>
            </div>
        )
}

export default ProjectPage
