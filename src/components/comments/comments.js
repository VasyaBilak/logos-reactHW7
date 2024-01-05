import { Component } from 'react';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
        comments: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        return response.json();
      })
      .then(comments => {
        this.setState({ comments });
      })
      .catch();
  }

  render() {
    const { comments } = this.state;

    return (
      <div>
        <h1>Comments:</h1>
        <ul>
          {comments.map(post => (
            <li key={post.id}>
              <h2>{post.name}</h2>
              <p>{post.email}</p>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Comments;