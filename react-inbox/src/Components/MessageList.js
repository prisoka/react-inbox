import React, { Component } from 'react';
import Message from './Message'

class MessageList extends Component {
  render() {
    console.log('this.props.messages', this.props.messages)
    let messageList = this.props.messages.map((message, index) => {
      return (
        <Message
          key={index}
          message={message}
          userStarredMessage={this.props.userStarredMessage}
          userSelectedMessage={this.props.userSelectedMessage}
          userReadMessage={this.props.userReadMessage}
        />
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
