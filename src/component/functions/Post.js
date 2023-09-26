import React from 'react'

export default function Post(props) {
    const post = props.post
    return (
        <div className="episode">
            <article key={post.id}>
                <h1
                    id="title"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <p id="date">{post.formatted_date}</p>
                <div
                    id="cont"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
            </article>
        </div>
    )
}
