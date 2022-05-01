import { Link, Outlet, useLocation } from "react-router-dom";

import "../assets/Posts.css";
import Title from "../component/functions/Title";

export default function Episodes() {

    const location = useLocation();
    const posts = location.state?.data;

  return (
    <div className="episodes">
      <Title title="PODCAST EPISODES"/>
      <div className="wrap">
        {posts.map((post) => (
          <div className="the-episode">
            <article key={post.id}>
              <Link to={post.slug}>
                <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered}}/>
              </Link>
              <p id="date">{post.formatted_date}</p>
              <div
                id="cont"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            </article>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
