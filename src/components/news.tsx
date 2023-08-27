import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Header from './Header';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            heading: '',
        };
    }

    async componentDidMount() {
        try {
            const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
            let url;
            if (this.props.category == null) {
                this.setState({ heading: 'Top Headlines' });
                url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;
            } else {
                const { category } = this.props;
                this.setState({ heading: category });
                url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            this.setState({ articles: data.articles });
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }

    render() {
        return (
            <div>
                <h1 className="heading">{this.state.heading}</h1>
                <div className="news">
                    {this.state.articles.map((element, index) => (
                        <NewsItem
                            imgUrl={element.urlToImage}
                            title={element.title}
                            description={element.description}
                            author={element.author}
                            source={element.source.name}
                            date={element.publishedAt}
                            newsUrl={element.url}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default News;
