import App from "./App";
import NotFound from "./pages/NotFound";
import VideoDetail from "./pages/VideoDetail";
import Videos from "./pages/Videos";

export const menu = [
  {
    path:"/",
    element:<App/>,
    errorElement:<NotFound/>,
    children:[
        {index: true ,element:<Videos/>},
        {path: "videos" ,element:<Videos/>},
        {path: "videos/:keyword" ,element:<Videos/>},
        {path: "videos/watch/:videoId" ,element:<VideoDetail/>},
    ]
  }
];