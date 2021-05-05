import Bride from "./components/pages/Bride";
import Event from "./components/pages/Event";
import Gallery from "./components/pages/Gallery";
import Home from "./components/pages/Home";
import HomeScreen from "./components/pages/HomeScreen";
import LinkGenerator from "./components/pages/LinkGenerator";
import Quotes from "./components/pages/Quotes";
import Wishes from "./components/pages/Wishes";

const routes = [
  {
    path: "/",
    component: HomeScreen,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/bride",
    component: Bride,
  },
  {
    path: "/event",
    component: Event,
  },
  {
    path: "/gallery",
    component: Gallery,
  },
  {
    path: "/quotes",
    component: Quotes,
  },
  {
    path: "/wishes",
    component: Wishes,
  },
  {
    path: "/link",
    component: LinkGenerator,
  },
];

export default routes;
