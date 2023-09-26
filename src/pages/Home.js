import React from 'react'
import InfoCard from '../component/functions/InfoCard'

import img1 from '../assets/img/reggie-header1.jpg'
import img2 from '../assets/img/reggie-header.jpg'
import Title from '../component/functions/Title'

export default function Home() {
    return (
        <div className="home">
            <Title
                title="THE SHAKESPEARE SOUND"
                subtitle="Sounds that give delight and hurt not."
            />
            <br />
            <InfoCard
                id={1}
                img={img1}
                title="Our Podcast"
                text="Wouldn't it be nice to sit down, put in some earbuds, and listen to a podcast that can fully explain the world of Shakespeare? We demonstrate exactly that, and go through the words of Shakespeare, while learning how to act out and interpret it all. We hope to show the inner workings of his text and truly how powerful words are!"
            />

            <InfoCard
                id={2}
                img={img2}
                title="A Message"
                text="We are truly sorry for the huge delay, as we have went through a lot of life changes and struggles to deal with. We hope that we can make it up to you all, and re-release the old episodes that made us who we are today on this brand new website of ours! Our 'coming soon' page was a promise, and we have yet to break it, so sit tight as we produce the new revival of our amazing podcast!"
            />
        </div>
    )
}
