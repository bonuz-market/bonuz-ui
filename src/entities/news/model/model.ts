import { createStore } from 'effector';
import { useStore } from 'effector-react';

import { NewsItem } from './model.types';
import mockData from '@/shared/mock/mock-data.json';

const $news = createStore<NewsItem[]>(mockData.news);

const useNewsStore = (): NewsItem[] => useStore($news);

const store = {
  useNewsStore,
};

export const newsModel = { store };
