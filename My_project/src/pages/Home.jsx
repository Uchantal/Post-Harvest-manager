import React from 'react';
import './Home.css';
import PostDisplay from '../components/PostDisplay';
import mockPosts from '../mocks/mockPosts';

function Home() {
  return (
    <div className="home-container">
      <h1>Join us and enjoy the fair market of Agriculture products .</h1>
      <div className="search-container">
        <input type="text" placeholder="Search for products..." className="search-input" />
        <button className="search-button">Search</button>
      </div>
      {/* <PostDisplay posts={mockPosts} /> */}
    </div>
  );
}

export default Home;