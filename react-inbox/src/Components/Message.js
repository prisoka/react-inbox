import React, { Component } from 'react';

const Message = ({message}) => {
  return (
    <div className={`row message ${message.read ? 'read' : 'unread'}`}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" />
          </div>
          <div className="col-xs-2">
            <i className="star fa fa-star"></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        <span className="label label-warning">dev</span>
        <span className="label label-warning">gschool</span>
        <a href="#">
          Here is some message text that has a bunch of stuff
        </a>
      </div>
    </div>
  );
}

export default Message;
