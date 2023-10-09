import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SideBar from "./SideBar";
import MenuLogin from "./MenuLogin";
import SideBarLogin from "./SideBarLogin";
import SignUp from "./SignUp";
import Login from "./Login";
import Video from "./Video";
import AppWrapper from "./AppWrapper";
import Studio from "./Studio";
import VideoEdit from "./VideoEdit";
import Trending from "./Trending";
import UserEdit from "./User_Edit";
import Channel from "./Channel";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AppWrapper>
              <Home />
            </AppWrapper>
          }
        />
        <Route
          path="/trending"
          element={
            <AppWrapper>
              <Trending />
            </AppWrapper>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user_info/:id"
          element={
            <AppWrapper>
              <UserEdit />
            </AppWrapper>
          }
        />
        <Route
          path="/channel/:id"
          element={
            <AppWrapper>
              <Channel />
            </AppWrapper>
          }
        />
        <Route
          path="/watch/:id"
          element={
            <AppWrapper>
              <Video />
            </AppWrapper>
          }
        />

        <Route
          path="/studio"
          element={
            <AppWrapper>
              <Studio />
            </AppWrapper>
          }
        />
        <Route
          path="/video_edit/:id"
          element={
            <AppWrapper>
              <VideoEdit />
            </AppWrapper>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
