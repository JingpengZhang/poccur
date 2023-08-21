import categories from "../config/categories";

const utils = {
  /**
   * 根据分类名获取分类 slug
   * @param name 分类名
   */
  getCategorySlugByName(name: string) {
    const category = categories.find((item) => item.name === name);
    return category ? category.slug : null;
  },
};

export default utils;
