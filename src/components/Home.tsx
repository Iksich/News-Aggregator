import React from 'react';
import { Header } from './Header';
import { News } from './News';
import { About } from './About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Define a type for the news category
type NewsCategory = 'business' | 'science' | 'technology' | 'entertainment' | 'sports';

interface HomeProps {
  // Example: pageTitle is a string prop for the title of the page
  pageTitle: string;
  // Example: newsCategory is a news category that defaults to 'business'
  newsCategory?: NewsCategory;
  // You can add more props here as needed
}

export const Home: React.FC<HomeProps> = ({ pageTitle, newsCategory = 'business' }) => {
  return (
    <div>
      <Router>
        <Header />
        <div className="container" style={{ width: '100%' }}>
          <Routes>
            <Route path="/" element={<News pageTitle={pageTitle} />} />
            <Route path="/business" element={<News pageTitle={pageTitle} category="business" />} />
            <Route path="/science" element={<News pageTitle={pageTitle} category="science" />} />
            <Route path="/technology" element={<News pageTitle={pageTitle} category="technology" />} />
            <Route path="/about" element={<About />} />
            <Route path="/entertainment" element={<News pageTitle={pageTitle} category="entertainment" />} />
            <Route path="/sports" element={<News pageTitle={pageTitle} category="sports" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};
