// app/blog/page.tsx

export default function BlogList() {
    return (
      <div style={{ padding: '40px' }}>
        <h1>Blog</h1>
        <ul>
          <li><a href="/blog/my-first-post">My First Post</a></li>
          <li><a href="/blog/my-second-post">Hello World</a></li>
        </ul>
      </div>
    );
  }
  