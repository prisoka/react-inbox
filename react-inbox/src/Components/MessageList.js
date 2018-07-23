import React, { Component } from 'react';
import Message from './Message'

class MessageList extends Component {
  render() {
    // console.log('this.props.messages', this.props.messages)
    let messageList = this.props.messages.map((massage, index) => {
      return (
        <Message key={index} message={message}/>
      )
    })

    return (
      <div>
        {messageList}
      </div>
    )
  }
}

export default MessageList;
