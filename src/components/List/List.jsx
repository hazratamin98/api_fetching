import React from "react"
import classNames from "classnames/bind"
import Card from "../Card/Card"

import styles from "./List.module.scss"
const cx = classNames.bind(styles)

const List = ({ data }) => {
  return (
    <div className={cx("list_wrapper")}>
      {data.map((item, i) => (
        <Card key={i} data={item} />
      ))}
    </div>
  )
}

export default List
