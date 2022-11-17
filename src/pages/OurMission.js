import React from 'react'
import InfoText from '../component/functions/InfoText'
import Title from '../component/functions/Title'

export default function OurMission() {
    return (
        <div className="our-mission">
            <Title title="OUR MISSION" />
            <InfoText
                title="Process"
                subtitle="3 Readings of one of Shakespeare's sonnets:
    a blank reading, an exaggerated reading (to discover tone), and an interpreted reading."
                text={
                    <>
                        <p>
                            Within 10 minutes we hope to demonstrate to our
                            listeners an actor's process towards making
                            discoveries for meaning and interpretation just by
                            using the words themselves. Without pointing them
                            out, but being mindful of them, Dana will pay
                            attention to and heed spelling, repetition,
                            alliteration (repetition of two or more consonant
                            sounds), assonance (repetition of two or more vowel
                            sounds), onomatopoeia (word that sounds like what it
                            describes), etc. and use those things to help the
                            listener hear them, too.
                        </p>
                        <p>
                            We hope we may inspire you, the listener, to
                            rediscover the intrinsic power of words!
                        </p>
                    </>
                }
            />
            <InfoText
                title="Mission"
                subtitle="Reclaim Shakespeare for the People, one listener at a time!"
                text={
                    <>
                        <p>
                            As a society, we are more familiar with
                            Shakespeare's words and phrases than even his own
                            audiences were, yet we get so hung up on 'thee',
                            'thou', 'wherefore' and others, that we shut down or
                            run. We have been taught that each word has meaning
                            (true), some are defined differently today than in
                            Shakespeare's time (true), that character
                            development, place and relationships are significant
                            to understanding the story (well, duh), but we are
                            not taught properly how to discover all of those
                            things! By SPEAKING & LISTENING!
                        </p>
                        <p>
                            ALL PEOPLE WHO READ SHAKESPEARE ARE STUDENTS OF
                            SHAKESPEARE - EVEN YOUR TEACHERS, PROFESSORS &
                            DIRECTORS! Everytime Shakespeare is spoken aloud,
                            recited and played with, NEW discoveries are made
                            about word meaning, intention, mood and motivation.
                            All teachers and directors should be 'playing'
                            Shakespeare with their students. That's our opinion,
                            because we've done it, we do it, and it WORKS! So,
                            there.
                        </p>
                    </>
                }
            />
            <InfoText
                title="Motivation"
                subtitle="We were inspired, so why not inspire?"
                text={
                    <>
                        <p>
                            It all started with a little play called{' '}
                            <strong style={{ fontFamily: 'latobold' }}>
                                Romeo & Juliet
                            </strong>
                            ... to sum up, we got more than the{' '}
                            <em>
                                "hey, we're actors, let's do the chic thing and
                                audition for this Shakespeare play with this
                                guest director lady, it'll look good on our
                                resume"
                            </em>{' '}
                            that we bargained for - much more. In fact, this
                            'guest director lady' handed each member of her cast
                            a 'magic key' for unlocking what we thought was the
                            big, scary, solid oak door to the high-browed,
                            academic world of William Shakespeare. You might
                            think that this key is big and golden with ornate
                            bits and bobs, but no. Oh no, it's a simple little
                            key, with a single little word imprinted on it:{' '}
                            <strong style={{ fontFamily: 'latobold' }}>
                                Listen
                            </strong>
                            .
                        </p>
                        <p>
                            <em>
                                "All we have are Shakespeare's words; words,
                                many of which, he wrote for an audience who were
                                hearing them for the first time, so what do they
                                SOUND like? How do they feel on your lips as you
                                say them? How can you use those sounds to move
                                our audience into experiencing what YOU are
                                experiencing?"
                            </em>{' '}
                            we summarize her as saying. As a result, our
                            audiences walked away saying, "As many times as I've
                            read that play, I understood it for the first time."
                            And why? We told you. It was that "magic key."
                        </p>
                    </>
                }
            />
        </div>
    )
}
