import React from 'react'

const Rating = ({ count }) => {
    const totalStars = 5
    const countStarArr = Array.from(Array(totalStars).keys())

    return (
        countStarArr?.map((item, index) => {
            return <i class={`icon-star${item <= count ? '-empty':'3'}`}></i>;
        })
    )
}

export default Rating