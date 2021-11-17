import React from 'react'
const LearnContent = props => {
    return (
        <>
            <div class="column">
                <div className="column-bg">
                    <img src={props.image} className="Live-RS-img" alt="Jane" />
                    <span className="Live-RS-Name">{props.name}</span>

                    <div class="ContentLight">
                        .
                    </div>

                </div>
            </div>
        </>
    )
}


export default LearnContent