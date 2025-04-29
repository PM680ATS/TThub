export default function Home() {
  return (
    <div>
      <h1>Redirecting...</h1>
      <script dangerouslySetInnerHTML={{ __html: `window.location.href = "/login"` }} />
    </div>
  );
}