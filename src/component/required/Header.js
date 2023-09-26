import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Header() {
    const [posts, setPosts] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios
            .get(
                process.env.REACT_APP_WP +
                    'episodes?page=1&filter[orderby]=name&order=desc'
            )
            .then((res) => {
                setPosts(res.data)
            })
            .catch((err) => console.log(err))
        setLoaded(true)
    }, [loaded])

    return (
        <header>
            <ul className="head-list">
                <Link to={'/'}>
                    <li>HOME</li>
                </Link>
                <Link to={'/episodes'} state={{ data: posts }}>
                    <li>EPISODES</li>
                </Link>
                <Link to={'/our-mission'}>
                    <li>OUR MISSION</li>
                </Link>
                <Link to={'/coming-soon'}>
                    <li>COMING SOON</li>
                </Link>
            </ul>
        </header>
    )
}

export default Header
