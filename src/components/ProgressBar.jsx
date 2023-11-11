const ProgressBar = ({progress}) => {
    return ( 
        <div className="border border-black h-3 ">
            <div className="bg-green-300 flex h-full transition-all  ease-linear delay-100 duration-500" 
            style={{width: progress + '%'}}></div>
          </div>
     );
}
 
export default ProgressBar;