import React, {Component} from 'react';

class CommentBox extends Component {

  state={comment: ''};

  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      comment: value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // TODO - call an action creator
    // and save the comment

    this.setState({
      comment: ''
    })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add A Comment</h4>
        <textarea
          onChange={this.handleChange}
          value={this.state.comment}
        />
          <div>
            <button>Submit Comment</button>
          </div>
      </form>
    );
  }
}

export default CommentBox;
