import React from 'react'

const ProgressIcon = ({status, height}) => {

    const backgroundColor = (status) => {
        let backgroundColor
        if (status === 'not_started'){
            backgroundColor = 'bg-danger';
        } else if ( status === 'in_progress'){
            backgroundColor = 'bg-warning'
        } else{
            backgroundColor = 'bg-success'
        }
        return backgroundColor
    }
  return (
    <div style={{height:height, width:height}} className={`rounded-circle ${backgroundColor(status)}`}></div>
  )
}

export default ProgressIcon