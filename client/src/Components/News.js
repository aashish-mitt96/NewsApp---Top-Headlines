import React, { useState, useEffect } from "react";
import Card from "./Card";
import Spinner from "./Spinner";

export default function News({ mode }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const pageSize = 9;

  useEffect(() => {
    const apiUrl = `http://localhost:5000/api/news?pageSize=${pageSize}&page=${page}`;
  
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setArticles(result.articles || []);
        setTotalPages(Math.ceil(result.totalResults / pageSize));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
      setLoading(false);
      window.scrollTo(0, 0);
    };
  
    fetchData();
  }, [page]);
  

  const handlePrev = () => setPage(page - 1);
  const handleNext = () => setPage(page + 1);

  return (
    <>
      <div className="container my-4">
        <h2
          style={{ color: mode === "Light" ? "Black" : "White" }}
          className="text-center"
        >
          NewsApp - Top Headlines
        </h2>
        {loading ? (
          <div className="text-center">
            <Spinner />
          </div>
        ) : (
          <div className="row my-4">
            {articles && articles.length > 0 ? (
              articles.map((article, index) => (
                <div className="col-md-4" key={index}>
                  <Card
                    mode={mode}
                    title={article.title}
                    description={article.description}
                    imgUrl={article.urlToImage}
                    newsUrl={article.url}
                    date={article.publishedAt}
                  />
                </div>
              ))
            ) : (
              <h4 className="text-center">No news articles found</h4>
            )}
          </div>
        )}
      </div>

      <div className="container d-flex justify-content-between mb-2">
        <button
          disabled={page === 1}
          onClick={handlePrev}
          type="button"
          className="btn btn-dark"
        >
          &larr; Previous
        </button>
        <button
          disabled={page === totalPages}
          onClick={handleNext}
          type="button"
          className="btn btn-dark"
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
}
