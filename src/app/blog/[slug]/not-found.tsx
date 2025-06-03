// app/not-found.tsx

export default function NotFound() {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, we couldn’t find the posts.</p>
        <a href="/blog" style={{ color: 'blue', textDecoration: 'underline' }}>
          Go back home
        </a>
      </div>
    );
  }
  