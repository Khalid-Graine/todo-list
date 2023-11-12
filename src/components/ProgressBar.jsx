const ProgressBar = ({progress}) => {
    return ( 
        <div className="border-Bold border-theBorder h-3 rounded-sm ">
        
            <div className="bg-primary flex h-full transition-all  ease-linear delay-100 duration-500 " 
            style={{width: progress + '%'}}></div>
          </div>
     );
}
 
export default ProgressBar;