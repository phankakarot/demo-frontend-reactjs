import React from 'react'

const Rating = ({ count }) => {
    const totalStars = 5
    const countStarArr = Array.from(Array(totalStars).keys())

    return (
        countStarArr?.map((item, index) => {
            return <i className={`icon-star${item > count ?(item - 1 < count ? '-half-full' : '-empty') :'3'}`}></i>;
        })
    )
}

export default Rating