import React from 'react';
import { Tabs } from '@mantine/core';
import axios from 'axios';
import { useState } from 'react';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
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

  const fetchNewsByCategory = async (pageParams = 1) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/news/${category}`,
        { params: { page: pageParams } }
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, hasNextPage, fetchNextPage, status } = useInfiniteQuery({
    queryKey: ['category', category],
    queryFn: fetchNewsByCategory,
    getNextPageParam: (lastPage) => {
      console.log('lastPage: ', lastPage);

      return lastPage.nextPage;
    },
  });
  console.log(data);
  return (
    <div className="py-12 px-10">
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
    </div>
  );
}

export default Category;

//  <Tabs.Tab
//             value="Bookmarks"
//             leftSection={<Bookmark size={16} color="orange" />}
//           >
//             Bookmarks
//           </Tabs.Tab>
//           <Tabs.Tab
//             value="messages"
//             leftSection={<Heart size={16} color="red" />}
//           >
//             Liked News
//           </Tabs.Tab>
//           <Tabs.Tab value="preferences" leftSection={<Cog size={16} />}>
//             Preferences
//           </Tabs.Tab>
//           <Tabs.Tab value="ai-recommandations" leftSection={<Bot size={16} />}>
//             AI Recommandations
//           </Tabs.Tab>
