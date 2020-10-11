import * as React from 'react'

interface Props {
  title: string
}

export const Header = (props: Props): JSX.Element => {
  return <div className='header'>
    <h1>{props.title}</h1>
  </div>
}
