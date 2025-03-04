import React, { useEffect, useState } from 'react';
import { Pagination } from '@mantine/core';
import { TrendingUp, Briefcase, Cpu, Volleyball, Landmark } from 'lucide-react';
import { fetchAllNews } from '../redux/slice/newsSlice';
import { Skeleton } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
function NewsPage() {
  const { totalPages, news, loading } = useSelector((state) => state.news);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const categories = [
    { name: 'Trending', icon: <TrendingUp size={18} /> },
    { name: 'Politics', icon: <Landmark size={18} /> },
    { name: 'Tech', icon: <Cpu size={18} /> },
    { name: 'Sports', icon: <Volleyball size={18} /> },
    { name: 'Business', icon: <Briefcase size={18} /> },
  ];

  console.log(currentPage);
  console.log(search);
  useEffect(() => {
    dispatch(fetchAllNews({ currentPage, search }));
  }, [currentPage, search]);

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 p-6 sticky top-0 h-screen  shadow-md">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <div className="space-y-3">
          {categories.map((category) => (
            <button
              key={category.name}
              className="w-full flex items-center text-sm gap-3 px-4 py-2 bg-white rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-8">
        <h1 className="text-4xl mt-7 md:text-4xl font-bold">
          Stay Updated with the Latest News
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Get real-time updates from trusted sources across the globe.
        </p>

        <div className="mt-4 flex gap-2">
          <input
            type="text"
            placeholder="Search news..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-80 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button className="px-6 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-700">
            Search
          </button>
        </div>

        <div className="mt-6 space-y-6">
          {loading ? (
            <div  className="p-4 flex shadow-sm rounded-lg">
           
              <div className="flex flex-col flex-1 gap-2">
                 <Skeleton h={40} ml={4} />
                 <Skeleton h={40} ml={4}/>
                </div>
                 <div>
                <Skeleton m={4} h={128} w={128} /> 
                </div>
            </div>
          ) : (
            news?.map((n, i) => (
              <div key={i} className="p-4 flex shadow-sm rounded-lg">
                <div className="flex flex-col flex-1 gap-2">
                  <a
                    href={n.url}
                    target="_blank"
                    className="text-xl hover:text-sky-500 font-medium"
                  >
                    {n.title}
                  </a>

                  <p className="text-gray-700 text-md">{n.description}</p>
                </div>
                <div>
                  <img className="h-32 w-32 object-cover" src={n.urlToImage} />
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <Pagination
            value={currentPage}
            total={totalPages}
            onChange={setCurrentPage}
            color="blue"
            radius="sm"
          />
        </div>
      </main>
    </div>
  );
}

export default NewsPage;
