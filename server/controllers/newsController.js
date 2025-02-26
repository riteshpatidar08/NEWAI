import User from '../model/User.js';
import axios from 'axios';
export const Preferences = async (req, res) => {
  try {
    const { id } = req.params;
    const { preferences } = req.body;

    const user = await User.findById(id);
    console.log(user);
    // console.log([...preferences]);
    console.log(user.preferences);
    user.preferences = [...user.preferences, ...preferences];
    await user.save();

    res.status(200).json({
      message: 'preferences save successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const fetchNewsByCategory = async (req, res) => {
  const { category } = req.params;
  console.log(category)
  const { page = 0 } = req.query;
  console.log(page)
  const pageSize = 10;
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?page=${page}&pageSize=${pageSize}&category=${category}&country=us&apiKey=${process.env.NEWS_API_KEY}`
    );
    console.log(response.data.articles);

   
     res.status(200).json({
        length: response.data.articles.length,
        news: response.data.articles,
        nextPage:
          response.data.articles.length === pageSize ? Number(page) + 1 : null,
      });
   
  } catch (error) {}
};
