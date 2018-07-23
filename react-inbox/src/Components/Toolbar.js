import React, { Component } from 'react';

class Toolbar extends Component {

  render() {
    let unreadMessages = this.props.messages.filter((message) => !message.read).length

    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{ unreadMessages }</span>
            unread messages
          </p>

          <button className="btn btn-default">
            <i
              className={`fa fa${ this.props.selectedIndicator() }-square-o`}
              onClick={ () => this.props.selectAllMessagesBtn() }
            ></i>
          </button>

          <button
            className="btn btn-default"
            disabled={`${ this.props.disabledReadBtn() }`}
            onClick={() => this.props.markAsRead()}
          >
            Mark As Read
          </button>

          <button
            className="btn btn-default"
            disabled={`${ this.props.disabledUnreadBtn() }`}
            onClick={() => this.props.markAsUnread()}

          >
            Mark As Unread
          </button>

          <select
            className="form-control label-select"
            disabled={`${ this.props.disabledAddLabelDropDown() }`}
          >
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select
            className="form-control label-select"
            disabled={`${ this.props.disabledRemoveLabelDropDown() }`}
          >
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button
            className="btn btn-default"
            disabled={`${ this.props.disabledDeleteMessageBtn() }`}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Toolbar;
