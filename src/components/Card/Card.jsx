import React from "react"
import classNames from "classnames/bind"

import styles from "./Card.module.scss"
const cx = classNames.bind(styles)

const Card = ({ data }) => {
  return (
    <div className={cx("card_wrapper")}>
      <div>
        <img src={data.poster} alt="..." />
        <div>
          <span>
            {" "}
            <strong>{data.title}</strong>
          </span>
          <h1>Genres : {data.genre} </h1>
        </div>
      </div>
    </div>
  )
}

export default Card