import React, { useEffect, useState } from "react";

import Article from "./Article";
import { getnews } from "../service/api";

const Articles = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    dailyNews();
  }, []);

  const dailyNews = async () => {
    const respo = await getnews();
    console.log(respo.data);
    setNews(respo.data);
  };

  return (
    <>
      {news.map((article) => {
        return (
          <>
            <Article article={article} />
          </>
        );
      })}
    </>
  );
};

export default Articles;
