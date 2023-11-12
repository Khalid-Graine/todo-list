const HelpButtons = ({ Tasks, DeleteAll, CheckAll}) => {
  return (
    <div className="flex justify-between gap-2">
      <button
        onClick={() => CheckAll()}
        className=" CheckAll  bg-done px-5 rounded-sm font-semibold border-theBorder text-white border-Bold"
      >
        Check All
      </button>
      <button
        onClick={() => DeleteAll()}
        className=" bg-red-500 px-5 rounded-sm font-semibold border-theBorder text-white  border-Bold"
      >
        Delete All ({Tasks.length})
      </button>
    </div>
  );
};

export default HelpButtons;
