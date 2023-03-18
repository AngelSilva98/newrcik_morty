const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" />
      </div>
      <button>Send</button>
    </form>
  );
};

export default Form;
