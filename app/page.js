'use client'

import Loading from './loading'
import { Suspense } from 'react'
import { useEffect, useState } from "react"
import PostCard from "components/PostCard";

const PostCardList = ({ data, handleTagClick }) => {
  return (

      <div className='mt-6 post_layout'>
        {data.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
      </div>

  );
};

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([])

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/create');
        const data = await response.json();

        setPosts(data);
      } catch (error) {
        fetchPosts();
      }
    };
    fetchPosts();
  }, []);



  const filterPosts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.post)
    );
  };


  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPosts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPosts(tagName);
    setSearchedResults(searchResult);
  };


  const handlePopularTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPosts(tagName);
    setSearchedResults(searchResult);
  };


  return (

    <section className="flex-center w-full flex-col">
      <div className='bg-style py-8'>
        <h1 className="head_text text-center">Share and Discover
          <br className="max-md:hidden" />
          <span className="text-center"> Top Tech Courses</span>
        </h1>
        <p className="desc text-center mx-auto">
          Course Connect is an open source course & resource aggregator from various industry experts and edtech platforms. Built for techies to aid them discover, learn, grow, and build on high quality courses and resources.
        </p>
        <div className="feed">
          <form className="relative w-full flex-center">
            <input
              className="search_input peer"
              type="text"
              placeholder="Search for resources, tags or users..."
              value={searchText}
              onChange={handleSearchChange}
              required
            />
          </form>
          <p className="my-5 text-white flex items-center justify-center flex-wrap max-w-md gap-3">
            <span className="text-sm font-semibold">Popular:</span>
            <span
              className="border py-0.5 px-3 rounded-full cursor-pointer"
              onClick={() => handlePopularTagClick("web")} // Add onClick event for each tag
            >
              web
            </span>
            <span
              className="border py-0.5 px-3 rounded-full cursor-pointer"
              onClick={() => handlePopularTagClick("design")}
            >
              design
            </span>
            <span
              className="border py-0.5 px-3 rounded-full cursor-pointer"
              onClick={() => handlePopularTagClick("cloud")}
            >
              cloud
            </span>
            <span
              className="border py-0.5 px-3 rounded-full cursor-pointer"
              onClick={() => handlePopularTagClick("mobile")}
            >
              mobile
            </span>
            <span
              className="border py-0.5 px-3 rounded-full cursor-pointer"
              onClick={() => handlePopularTagClick("ml/ai")}
            >
              ml/ai
            </span>
            <span
              className="border py-0.5 px-3 rounded-full cursor-pointer"
              onClick={() => handlePopularTagClick("blockchain")}
            >
              blockchain
            </span>
            <span
              className="bg-white text-black border hover:bg-transparent hover:text-white transition-all duration-200 text-center px-1 rounded-full cursor-pointer"
              onClick={() => handlePopularTagClick("")}
            >x</span>
          </p>
        </div>
      </div>

      <Suspense fallback={<Loading />}>
        <section className="app">
          {searchText ? (
            <PostCardList
              data={searchedResults}
              handleTagClick={handleTagClick}
            />) : (
            <PostCardList
              data={posts}
              handleTagClick={handleTagClick}
            />)}
        </section>
      </Suspense>
    </section>
  )
}

export default Home