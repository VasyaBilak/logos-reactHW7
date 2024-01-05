import { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        return response.json();
      })
      .then(posts => {
        this.setState({ posts });
      })
      .catch();
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        <h1>Posts:</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Posts;