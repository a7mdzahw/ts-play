import PostDetail from "./components/postDetails";
import Posts from "./pages/posts";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Link from "components/link";
import _ from "lodash";
import useScrollTop from "hooks/useScrollTop";
import { Button } from "react-bootstrap";
import { logout, useAuthContext } from "context/authContext";

function useBack(): { previous: string; pathname: string } {
  const { pathname } = useLocation();
  const previous = _(pathname).split("/").initial().join("/");
  return { previous, pathname };
}

function App() {
  useScrollTop()
  const { previous, pathname } = useBack();
  const [{isAuth},dispatch] = useAuthContext()

  return (
    <div className="App">
      {isAuth && <Button variant="danger" onClick={() => logout(dispatch)}>Logout</Button>}
      {pathname === "/" ? null : <Link to={previous}>Back</Link>}
      <Routes>
        <Route index element={<Home />} />
        <Route path="posts">
          <Route index element={<Posts />} />
          <Route path=":id" element={<PostDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
