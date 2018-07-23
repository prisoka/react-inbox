import React, { Component } from 'react';
import './App.css';

import Toolbar from './Components/Toolbar'
import MessageList from './Components/MessageList'

class App extends Component {
  state = {
    messages: [
      {
        "id": 1,
        "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
        "read": false,
        "starred": true,
        "labels": ["dev", "personal"]
      },
      {
        "id": 2,
        "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
        "read": false,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 3,
        "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
        "read": false,
        "starred": true,
        "labels": ["dev"]
      },
      {
        "id": 4,
        "subject": "We need to program the primary TCP hard drive!",
        "read": true,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 5,
        "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
        "read": false,
        "starred": false,
        "labels": ["personal"]
      },
      {
        "id": 6,
        "subject": "We need to back up the wireless GB driver!",
        "read": true,
        "starred": true,
        "labels": []
      },
      {
        "id": 7,
        "subject": "We need to index the mobile PCI bus!",
        "read": true,
        "starred": false,
        "labels": ["dev", "personal"]
      },
      {
        "id": 8,
        "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
        "read": true,
        "starred": true,
        "labels": []
      }
    ]
  }

  /* Message story: Starring >>>
  - When a user clicks the star next to a message
  - Then it should toggle whether the message is starred or not */

  userStarredMessage = (message) => {
    // console.log('function userStarredMessage', message)
    message.starred = !message.starred
    // now, setState:
    this.setState(this.state.messages.concat(message))
  }

  /* Message story: Selecting Individual Messages >>>
  - When a user checks the checkbox on a message / Then the message should be highlighted
  - When a user unchecks the checkbox on a message / Then the message should _not_ be highlighted */
  userSelectedMessage = (message) => {
    message.selected = !message.selected
    // now, setState:
    this.setState(this.state.messages.concat(message))
  }

  /* Message story: Marking Messages as Read
  - When a user selects messages And presses "Mark As Read"
  - Then each selected message should be marked as "read" And should no longer be bold */
  userReadMessage = (message) => {
    message.read = true
    // now, setState:
    this.setState(this.state.messages.concat(message))
  }

  /* Toolbar story: Marking Messages as Unread
  - When a user selects messages And presses "Mark As Unread"
  - Then each selected message should be marked as unread And should should appear bold */
  selectedIndicator = () => {
    let numMessageSelected = this.state.messages.filter((message) => {
      return message.selected
    }).length

    let action = ''

    if (numMessageSelected === this.state.messages.length){
      action = '-check'
    } else if (numMessageSelected === 0) {
      action = ''
    } else {
      action = '-minus'
    }

    return action
  }

  // Toolbar story: Bulk Select / Deselect
  selectAllMessagesBtn = () => {
    let numMessageSelected = this.state.messages.filter((message) => {
      return message.selected
    }).length

    if (numMessageSelected === this.state.messages.length) {
      this.setState({
        message: this.state.messages.map((message) => {
          message.selected = false
          return message
        })
      })
    } else {
      this.setState({
        message: this.state.messages.map((message) => {
          message.selected = true
          return message
        })
      })
    }
  }

  // Toolbar Story: Mark as Read
  markAsRead = () => {
    let selectedMessages = this.state.messages.filter((message) => message.selected)
    this.setState(this.state.messages.concat(selectedMessages.map(message => {
      message.read = true
      return message
    })))
  }

  // Toolbar Story: Mark as Unread
  markAsUnread = () => {
    let selectedMessages = this.state.messages.filter((message) => message.selected)
    this.setState(this.state.messages.concat(selectedMessages.map(message => {
      message.read = false
      return message
    })))
  }

  // Toolbar story: mark as Read disable BTN
  disabledReadBtn = () => {
    let selectedMessages = this.state.messages.filter((message) => message.selected)
    let readStatusArr = selectedMessages.map((message) => {
      return message.selected ? true : false
    })

    return readStatusArr.includes(true) || readStatusArr.length === 0 ? 'disable' : ''
  }

  // Toolbar story: mark as Unread disable BTN
  disabledUnreadBtn = () => {
    let selectedMessages = this.state.messages.filter((message) => message.selected)
    return selectedMessages === 0 ? 'disable' : ''
  }

  // Toolbar : disabled Delete Btn and Add/Remove Label Dropdown
  disabledDeleteMessageBtn = () => {
    let selectedMessages = this.state.messages.filter((message) => message.selected)
    return selectedMessages === 0 ? 'disable' : ''
  }

  disabledAddLabelDropDown = () => {
    let selectedMessages = this.state.messages.filter((message) => message.selected)
    let readStatusArr = selectedMessages.map((message) => {
      return message.selected ? true : false
    })

    return readStatusArr.includes(false) || readStatusArr.length === 0 ? 'disable' : ''
  }

  disabledRemoveLabelDropDown = () => {
    let selectedMessages = this.state.messages.filter((message) => message.selected)
    let readStatusArr = selectedMessages.map((message) => {
      return message.selected ? true : false
    })

    return readStatusArr.includes(false) || readStatusArr.length === 0 ? 'disable' : ''
  }

  // Toolbar story: Deleting Messages
  deleteMessage = () => {
    this.setState({
      messages: this.state.messages.filter((message) => {
        return !message.selected
      })
    })
  }

  // Toolbar: Add label(s)
  addLabel = (label) => {
    if(label === 'Apply label') return
    let selectedMessages = this.state.messages.filter((message) => message.selected)

    this.setState(this.state.messages.concat(selectedMessages.map((message) => {
      if(message.labels.includes(label)) return message
      message.labels.push(label)
      return message
    })))
  }

  // Toolbar: Remove label(s)
  removeLabel = (label) => {
    if(label === 'Remove label') return
    let selectedMessages = this.state.messages.filter((message) => message.selected)

    this.setState(this.state.messages.concat(selectedMessages.map((message) => {
      message.labels.splice(label, 1)
      return message
    })))
  }

  render() {
    return (
      <div className="App">
        <Toolbar
          messages={this.state.messages}
          selectedIndicator={this.selectedIndicator}
          selectAllMessagesBtn={this.selectAllMessagesBtn}
          markAsRead={this.markAsRead}
          markAsUnread={this.markAsUnread}
          disabledReadBtn={this.disabledReadBtn}
          disabledUnreadBtn={this.disabledUnreadBtn}
          disabledDeleteMessageBtn={this.disabledDeleteMessageBtn}
          disabledAddLabelDropDown={this.disabledAddLabelDropDown}
          disabledRemoveLabelDropDown={this.disabledRemoveLabelDropDown}
          addLabel={this.addLabel}
          removeLabel={this.removeLabel}
        />
        <MessageList
          messages={ this.state.messages }
          userStarredMessage={this.userStarredMessage}
          userSelectedMessage={this.userSelectedMessage}
          userReadMessage={this.userReadMessage}
        />
      </div>
    );
  }
}

export default App;
