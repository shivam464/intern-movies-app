import React from 'react'
import reload_icon from '../assets/images/icons/reload-icon.png'

const recentsearch_data = [
    {
        key: 0,
        title: "Jathi Ratnalu Movie",
        src: reload_icon
    },
    {
        key: 1,
        title: "Kids English Telugu Dubbed Movies",
        src: reload_icon
    },
    {
        key: 2,
        title: "3D Animation Movies",
        src: reload_icon
    },
    {
        key: 3,
        title: "Action Movies in Telugu 2020",
        src: reload_icon
    },
]

const Recentsearch = () => {

    return (
        <div class="search-block-iteams">
            <div class="recent-search">
                <h1>Recent Search Iteams</h1>

                {recentsearch_data.map((data) => {
                    const { title, src } = data;
                    return (
                        <div class="seach-item">
                            <span key={data.id}>
                                <img src={src} alt="Loading"/>
                                {title}
                            </span>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Recentsearch
