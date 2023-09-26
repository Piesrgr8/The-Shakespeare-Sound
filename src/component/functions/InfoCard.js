import React from 'react'

export default function InfoCard(props) {
    if (props.id === 1) {
        return (
            <div className="card-home">
                <div className="wrapper">
                    <div id="img">
                        <img src={props.img} alt="" />
                    </div>
                    <div id="text">
                        <div id="title">
                            <h3>{props.title}</h3>
                        </div>
                        <hr style={{ width: '85%' }} />
                        <div id="content">
                            <p>{props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (props.id === 2) {
        return (
            <div className="card-home">
                <div className="wrapper2">
                    <div id="img">
                        <img src={props.img} alt="" />
                    </div>
                    <div id="text">
                        <div id="title">
                            <h3>{props.title}</h3>
                        </div>
                        <hr style={{ width: '85%' }} />
                        <div id="content">
                            <p id="cont2">{props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
