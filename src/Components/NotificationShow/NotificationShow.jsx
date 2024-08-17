import "./NotificationShow.css"
import Markimg from "../../assets/Images/avatar-mark-webber.webp"
import Angelaimg from "../../assets/Images/avatar-angela-gray.webp"
import Jacobimg from "../../assets/Images/avatar-jacob-thompson.webp"
import Rizkyimg from "../../assets/Images/avatar-rizky-hasanuddin.webp"
import Kimberlyimg from "../../assets/Images/avatar-kimberly-smith.webp"
import Nathanimg from "../../assets/Images/avatar-nathan-peterson.webp"
import Annaimg from "../../assets/Images/avatar-anna-kim.webp"
import Chessimg from "../../assets/Images/image-chess.webp"
import Notifcationitems from "../Notifcationitems/Notifcationitems"
import { useState } from "react"

function NotificationShow(){
    const [Arrayofobjects,setArrayofobjects] =useState([
        {id:1, profilepic:Markimg, profilename:"Mark Webber",
            action: "react to your recent post",
        link: "My first tournament today!", dot:"dot1", time:"1m ago",
        messege:"",chesspic:"", isunread: true, messborder: "" ,
        
        },
        {id:2, profilepic:Angelaimg,  profilename:"Angela Gray" , 
            action: "followed you",
            link: "", dot:"dot1", time:"5m ago",
            messege:"",chesspic:"", isunread: true, messborder: "",
            
            },
        {id:3, profilepic:Jacobimg,  profilename:"Jacob Thompson" ,
             action: "has joined your group",
            link: "Chess Club", dot:"dot1", time:"1day ago",
             messege:"",chesspic:"", isunread: true, messborder: "",
             
            },
        {id:4, profilepic:Rizkyimg,  profilename:"Rizky Hasanuddin" ,
            action: "sent you a private message",
            link: "", dot:"", time:"5days ago",
            messege:"Hello. thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
            ,chesspic:"", isunread: false, messborder: "border",
            
            },
        {id:5, profilepic:Kimberlyimg,  profilename:"Kimberly Smith" ,
             action: "commented on your picture",
            link: "", dot:"", time:"1week ago", messborder: "",
            messege:"",chesspic: Chessimg, isunread: false, 
            
            },
        {id:6, profilepic:Nathanimg, profilename:"Nathan Peterson" ,
             action: "react to your recent post", messborder: "",
            link: "5 end-game strategies to increase your win rate", 
            dot:"", time:"2weeks ago",
            messege:"",chesspic:"", isunread: false,
            },
        {id:7, profilepic:Annaimg, profilename:"Anna Kim" ,
             action: "left the group group",messborder: "",
            link: "Chess Club", dot:"", time:"2weeks ago",
            messege:"",chesspic:"", isunread: false, 
            },

    ])
    const [count,setcount]=useState(3)
    function turncountzero(){
        setcount(0) ;
    let unreadall= Arrayofobjects.map((item)=>{
     (item.isunread = false) || (item.dot = "");
    return item;})
    setArrayofobjects(unreadall)
    };
    
    
function Newarrayunresdnot (unreadnot){
    let clickedid = unreadnot;
    let newarrayunreadnot = Arrayofobjects.map((item)=>{
        if(item.id==clickedid){(item.isunread=false) || (item.dot = "")};
        return item;
    })
    setArrayofobjects(newarrayunreadnot);
    
}

    return(
        <>
        <div id="readdiv">
            <h1 id="nothead">Notifications</h1>
            <span id="badge">{count}</span>
            <button id="markread" onClick={turncountzero}
            >Mark all as read</button>
        </div>

        <div id="arrydiv">
    {Arrayofobjects.map((item) =>{
        return(
            <Notifcationitems
            Newarrayunresdnot={Newarrayunresdnot}
            uniqid={item.id}
            profilename={item.profilename}
            key={item.id}
            profilepic={item.profilepic}
            action={item.action}
            link={item.link}
            dot={item.dot}
            time={item.time}
            messege={item.messege}
            chesspic={item.chesspic}
            isunread={item.isunread}
            messborder={item.messborder}
            ></Notifcationitems>
        )
    })}
    
    </div>
    </>
    )
}

export default NotificationShow