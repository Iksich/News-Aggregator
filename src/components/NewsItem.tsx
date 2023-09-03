import React from 'react';
import newsItemCss from '../styles/newsItem.css';

interface NewsItemProps {
  imgUrl: string | null;
  title: string;
  description: string;
  date: string;
  author: string | null;
  source: string;
  newsUrl: string;
  key: number;
}

export const NewsItem: React.FC<NewsItemProps> = ({
  imgUrl,
  title,
  description,
  date,
  author,
  source,
  newsUrl,
  key,
}) => {
  const checkUser = () => {
    return author || source;
  };

  const checkImg = () => {
    return imgUrl || '/images/no_image.png';
  };

  return (
    <div style={newsItemCss}>
      <div className="card">
        <div className="user_info">
          <div className="user_img">
            <img src="/images/user.svg" alt="" />
          </div>
          <div className="user_name">
            <p className="name">{checkUser()}</p>
            <p>{date}</p>
          </div>
          <div className="visit">
            <a href={newsUrl}>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-arrow-up-right-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                </svg>
              </button>
            </a>
          </div>
        </div>
        <hr />
        <div className="image_con">
          <img className="news_img" src={checkImg()} alt="Loading" />
        </div>
        <div id="decs">
          <p id="title">{title}</p>
        </div>
      </div>
    </div>
  );
};
