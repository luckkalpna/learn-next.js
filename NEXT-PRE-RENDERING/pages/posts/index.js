import React from 'react';
import Link from 'next/link'

function PostList({ posts }) {
  return (
    <div>
      <h1>Llist of Posts</h1>
      {
        posts.map((post) => {
          return (
            <div key={post.id}>
              <ul>
                <li>
                  <Link href={`posts/${post.id}`} passHref/>
                </li>
              </ul>
            <h2>
              {post.id} {post.title}
            </h2>
            <hr />
          </div>
          );
        })
      }
    </div>
  );
}

export async function getStaticProps() {
const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await response.json();

return {
  props: {
    posts: data,
  },
};
}

export default PostList;
