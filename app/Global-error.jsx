const GlobalError = ({ error, reset }) => {
  return (
    <html>
      <body>
        <h2>some thing went wrong </h2>
        <button onClick={() => reset()}>reset </button>
      </body>
    </html>
  );
};

export default GlobalError;
