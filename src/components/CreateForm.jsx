const CreateForm = ({ hundleSubmit, title, setTitle }) => {
  return (
    <form onSubmit={(e) => hundleSubmit(e)} className=" flex gap-2">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="h-8 flex-grow pl-1 border border-black"
      />

      <button type="submit" className="bg-blue-300 px-5 rounded-sm ">
        add
      </button>
    </form>
  );
};

export default CreateForm;
