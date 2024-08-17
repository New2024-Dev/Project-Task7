import "./Notifcationitems.css"

function Notifcationitems(props){
    function unreadnotifcation(event){
        props.Newarrayunresdnot(event.target.getAttribute("uniqid"))

    }
    return(
        <div uniqid={props.uniqid} onClick={unreadnotifcation}
        className={`notifcation ${props.isunread ? 'unread' : ''}`}>
            <div id="profilimg">
                <img src={props.profilepic} />
            </div>

            <div id="nameparg">
                <h2 id="profilename">{props.profilename}</h2>
                    <span id="action">{props.action}</span>
                    <h3 id="link">{props.link}</h3>
                    <span className={props.dot}></span>
                
                <p id="time">{props.time}</p>
                <p className={props.messborder}>{props.messege}</p>
            </div>

            <div id="chessdiv">
                <img  id="chessimg" src={props.chesspic} />
            </div>
        </div>

    )
}

export default Notifcationitems