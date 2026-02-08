import type { ArticleItem } from '~/types/article';

export const handleNavigation = (item: ArticleItem) => {

  const { setActiveItem } = useArticle();
  setActiveItem(item);
  
  return navigateTo(`/articles/${item.id}`);
};

