const ErrorMessage = ({ error }) => {
  return (
    <div>{error && <p className="text-black font-medium text-center">
       Please, enter a task name.
      </p>}</div>
  );
};

export default ErrorMessage;
