import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [],
  id: 0,
  article: {},
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
    setArticle: (state, action) => {
      state.id = action.payload;
      const foundArticle = state.articles.find((elem) => elem.blogId === state.id);

      if (foundArticle) {
        state.article = foundArticle;
      }
    },
  },
});

export const { setArticles, setArticle } = articlesSlice.actions;
export default articlesSlice.reducer;
