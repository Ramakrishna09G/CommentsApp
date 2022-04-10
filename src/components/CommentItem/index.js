// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, deleteComment, toggleIsLiked} = props
  const {
    id,
    name,
    comment,
    isLiked,
    atTheTime,
    initialContainerBackgroundClassName,
  } = commentDetails

  const onDeleteComment = () => {
    deleteComment(id)
  }

  const onClickLike = () => {
    toggleIsLiked(id)
  }

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="comment-item">
      <div className="comment-details-container">
        <p className={`name-logo ${initialContainerBackgroundClassName}`}>
          {name[0].toUpperCase()}
        </p>
        <div className="name-and-comment-card">
          <h1 className="name">
            {name}{' '}
            <span className="at-the-time">
              {formatDistanceToNow(atTheTime)} ago
            </span>
          </h1>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-and-delete-card">
        <div>
          <img src={likeImgUrl} alt="like" className="like-img" />
          <button className="like-btn" type="button" onClick={onClickLike}>
            Like
          </button>
        </div>
        <button
          type="button"
          onClick={onDeleteComment}
          testid="delete"
          className="delete-btn"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
