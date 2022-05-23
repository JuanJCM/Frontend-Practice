const Modal = ({clickedImg})=>{
    
    return(
        <div className="lightBox">
            <iframe
                src="https://www.youtube.com/watch?v=2D1t1RDLJ9s"
                onClick={runVideo()}
            />
        </div>
    );
}
export default Modal;