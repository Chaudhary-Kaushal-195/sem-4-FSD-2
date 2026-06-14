function LoginForm() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Login submitted successfully!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Enter email" />
      <button type="submit">Login</button>
    </form>
  );
}
export default LoginForm;
