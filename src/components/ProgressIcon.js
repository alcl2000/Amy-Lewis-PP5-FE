import React from 'react';

const ProgressIcon = ({status, height}) => {

    const backgroundColor = (status) => {
        let backgroundColor;
        if (status === 'not_started'){
            backgroundColor = 'bg-danger';
        } else if ( status === 'in_progress'){
            backgroundColor = 'bg-warning';
        } else{
            backgroundColor = 'bg-success'
        }
        return backgroundColor;
    }
    const statusText = (status) => {
        let statusText = status.replace('_', " ");
        let statusMessage = statusText.toUpperCase();
        return statusMessage;
    };
  return (
    <div className='row'>
        <div className='col-2'></div>
        <div style={{height:height, maxWidth:height}} className={`rounded-circle ${backgroundColor(status)} col-2`}></div>
        <p className='col-8'>{statusText(status)}</p>
    </div>
  )
}

export default ProgressIcon