import { SiHomeassistant } from "react-icons/si";
import { GiSelfLove, GiLoveLetter } from "react-icons/gi";
import { RiGalleryFill, RiSendPlaneFill } from "react-icons/ri";
import { BsChatQuoteFill } from "react-icons/bs";

export const menuList = [
    {
        path: "/home",
        title: "Home",
        icon: <SiHomeassistant className="menu-icon" />
    },
    {
        path: "/bride",
        title: "Bride",
        icon: <GiSelfLove className="menu-icon" />
    },
    {
        path: "/event",
        title: "Event",
        icon: <GiLoveLetter className="menu-icon" />
    },
    {
        path: "/gallery",
        title: "Gallery",
        icon: <RiGalleryFill className="menu-icon" />
    }, 
    {
        path: "/quotes",
        title: "Quotes",
        icon: <BsChatQuoteFill className="menu-icon" />
    },
    {
        path: "/wishes",
        title: "Wishes",
        icon: <RiSendPlaneFill className="menu-icon" />
    }
]