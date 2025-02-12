import React from 'react'

export default function splittext({children}) {
    const words = children.split("")
  return (
    words.nap((words, index) => (
        <span className='' key={index}>{words}</span>
    ))
  )
}
