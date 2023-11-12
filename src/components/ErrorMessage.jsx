const ErrorMessage = ({ error }) => {
  return (
    <div>{error && <p className="text-red-400">Please add a task name</p>}</div>
  );
};

export default ErrorMessage;
