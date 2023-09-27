import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import axios from 'axios'

import Title from '../component/functions/Title'

export default function Episodes() {
    const location = useLocation()
    const initPosts = location.state?.data
    const [loaded, setLoaded] = useState(false)
    const [page, setPage] = useState(1)
    const [header, setHeader] = useState([])
    const [posts, setPosts] = useState(initPosts)

    const onNext = () => {
        if (page >= header['x-wp-totalpages']) {
            return
        }
        setPage(page + 1)
        setLoaded(false)
    }

    const onPrevious = () => {
        if (page <= 1) {
            return
        }
        setPage(page - 1)
        setLoaded(false)
    }

    useEffect(() => {
        axios
            .get(
                process.env.REACT_APP_WP +
                    'episodes?page=' +
                    page +
                    '&filter[orderby]=name&order=desc'
            )
            .then((res) => {
                setHeader(res.headers)
                setPosts(res.data)
            })
            .catch((err) => console.log(err))
        setLoaded(true)
    }, [loaded, page])

    return (
        <div className="episodes">
            <Title title="PODCAST EPISODES" />
            {loaded ? <></> : <h2>Loading...</h2>}
            <div
                className="wrap"
                style={loaded ? { display: 'block' } : { display: 'none' }}
            >
                <div className='pagination'>
                    <button onClick={onNext}>Next →</button>
                    <p>{page}</p>
                    <button onClick={onPrevious}>← Previous</button>
                </div>
                {posts.map((post) => (
                    <div className="the-episode">
                        <article key={post.id}>
                            <Link to={post.slug}>
                                <h1
                                    dangerouslySetInnerHTML={{
                                        __html: post.title.rendered,
                                    }}
                                />
                                <p id="date">{post.formatted_date}</p>
                            </Link>
                            <div
                                id="cont"
                                dangerouslySetInnerHTML={{
                                    __html: post.excerpt.rendered,
                                }}
                            />
                        </article>
                    </div>
                ))}
                <div className='pagination'>
                    <button onClick={onNext}>Next →</button>
                    <button onClick={onPrevious}>← Previous</button>
                </div>
            </div>
            <Outlet />
        </div>
    )
}
