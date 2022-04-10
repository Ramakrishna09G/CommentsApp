import {Component} from 'react'

import {v4} from 'uuid'

import CommentItem from '../CommentItem/index'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()

    const {name, comment} = this.state

    const newComment = {
      id: v4(),
      name,
      comment,
      isLiked: false,
      atTheTime: new Date(),
      initialContainerBackgroundClassName:
        initialContainerBackgroundClassNames[
          Math.ceil(
            Math.random() * initialContainerBackgroundClassNames.length - 1,
          )
        ],
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state

    return (
      <div className="comments-app-container">
        <h1 className="main-heading">Comments</h1>
        <div className="user-comments-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-img"
          />

          <form
            className="user-comments-entry-section"
            onSubmit={this.onAddComment}
          >
            <p className="sub-heading">Say something about 4.0 Technologies</p>
            <input
              type="text"
              value={name}
              placeholder="Your Name"
              className="input-name"
              onChange={this.onChangeName}
            />
            <br />
            <textarea
              name="yourComment"
              value={comment}
              rows="8"
              cols="38"
              placeholder="Your Comment"
              className="comment-text"
              onChange={this.onChangeComment}
            />
            <br />

            <button type="submit" className="add-comment-btn">
              Add Comment
            </button>
          </form>
        </div>
        <hr />
        <p className="sub-heading">
          <span className="comments-count">{commentsList.length}</span>
          Comments
        </p>
        <ul className="comments-list-container">
          {commentsList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              key={eachComment.id}
              deleteComment={this.deleteComment}
              toggleIsLiked={this.toggleIsLiked}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
