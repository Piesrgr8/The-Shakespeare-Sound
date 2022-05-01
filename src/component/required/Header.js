import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../assets/Header.css";

export default function Header() {

  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      axios
        .get(process.env.REACT_APP_WP + "episodes?filter[orderby]=name&order=asc")
        .then((res) => {
          setPosts(res.data);
        })
        .catch((err) => console.log(err));
      setLoaded(true);
    }, [loaded]);
  
  return (
    <header>
      <ul className="head-list">
        <Link to={"/"}>
          <li>HOME</li>
        </Link>
        <Link to={"/episodes"} state={{ data: posts}}>
          <li>EPISODES</li>
        </Link>
        <Link to={"/our-mission"}>
          <li>OUR MISSION</li>
        </Link>
        <Link to={"/coming-soon"}>
          <li>COMING SOON</li>
        </Link>
      </ul>
    </header>
  );
}
