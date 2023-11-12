const CreateForm = ({ hundleSubmit, title, setTitle }) => {
  return (
    <form onSubmit={(e) => hundleSubmit(e)} className=" flex gap-2 ">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="h-8 flex-grow pl-1 bg-transparent rounded-sm border-theBorder  border-Bold"
      />

      <button type="submit" className="bg-primary px-5 rounded-sm font-semibold border-theBorder  border-Bold">
        add
      </button>
    </form>
  );
};

export default CreateForm;
