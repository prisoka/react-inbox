import React, { Component } from 'react';

const Message = ({message}) => {
  let labelList = message.labels.map((label, index) => {
    return (
      <span className="label label-warning">{ label }</span>

    )
  })
  return (
    <div className={`row message ${ message.read ? 'read' : 'unread' }`}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input
              type="checkbox"
              checked={ message.selected }
            />
          </div>
          <div className="col-xs-2">
            <i className={`star fa fa-star${ message.starred ? '' : '-o' }`}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        {labelList}
        <a href="#">
          Here is some message text that has a bunch of stuff
        </a>
      </div>
    </div>
  );
}

export default Message;
