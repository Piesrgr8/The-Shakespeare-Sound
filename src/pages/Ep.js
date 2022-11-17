import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Post from '../component/functions/Post'

export default function Ep() {
    const params = useParams()
    const [post, setPost] = useState([])
    const [loaded, setLoaded] = useState(false)

    const theData = async () => {
        try {
            await axios
                .get(
                    process.env.REACT_APP_WP +
                        'episodes?slug=' +
                        params.postslug
                )
                .then((res) => {
                    setPost(res.data)
                })
            setLoaded(true)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        theData()
    })

    return (
        <div>
            {loaded ? (
                post.map((thepost) => <Post post={thepost} />)
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    )
}
