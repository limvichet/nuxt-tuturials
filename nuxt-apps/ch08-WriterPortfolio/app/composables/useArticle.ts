import type { ArticleItem } from '~/types/article';

export const useArticle = () => {
  const activeItem = useState<ArticleItem | null>('selected-item', () => null);
  
  const setActiveItem = (item: ArticleItem) => {
    activeItem.value = item;
  };

  return { activeItem, setActiveItem };
};