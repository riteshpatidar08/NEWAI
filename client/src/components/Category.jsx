import React from 'react';
import { Tabs } from '@mantine/core';
import axios from 'axios';
import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import ArticleCard from './ArticleCard';
function Category() {
  const [category, setCategory] = useState('general');
  console.log(category);
  const categories = [
    'General',
    'Sports',
    'Politics',
    'Business',
    'Entertainment',
    'Health',
    'Science',
  ];

  const fetchNewsByCategory = async ({ pageParam = 1 }) => {
    const response = await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }/api/news/${category}?page=${pageParam}&pageSize=10`
    );
    return response.data;
  };

  const { data, hasNextPage, fetchNextPage, status } = useInfiniteQuery({
    queryKey: ['category', category],
    queryFn: fetchNewsByCategory,
    getNextPageParam: (lastPage) => {
      // console.log('lastPage: ', lastPage);

      return lastPage.nextPage;
    },
  });
  console.log(data);
  return (
    <div className="py-12 px-10 max-w-5xl mx-auto">
      <h1 className="text-center space-y-10 my-6 font-bold text-2xl">
        Categories
      </h1>

      <Tabs
        defaultValue="gallery"
        onChange={(value) => setCategory(value.toLowerCase())}
      >
        <Tabs.List>
          {categories.map((cat) => (
            <Tabs.Tab className="text-gray-200" size="lg" value={cat}>
              {cat}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
      <div className=' mt-14'>
        <InfiniteScroll
          dataLength={
            data?.pages.length >= 0 &&
            data?.pages.reduce(
              (total, page) => total + page.news.length,
              0 || 0
            )
          }
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={
            <p style={{ textAlign: 'center', margin: '20px 20px' }}>
              Loading ...
            </p>
          }
          endMessage={
            <p style={{ textAlign: 'center', marginTop: '20px' }}>
              No more news
            </p>
          }
        >
          <div className='space-y-6'>
          {data?.pages.length >= 0 &&
            data?.pages.map((page, index) =>
              page.news.map((article) => (
                <ArticleCard article={article} category={category} />
              ))
            )}
            </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default Category;
