import Product from "@models/Product.model";
import Comment from "@models/Comment.model";

const reformatProduct = async (model: Product | Product[]) => {
  const reformat = async (item: Product) => {
    const { id, name, count, height, width, weight, imageUrl } = item;
    const comments = await Comment.findAll({ where: { productId: id } });

    return {
      id,
      name,
      count,
      weight,
      imageUrl,
      size: {
        width,
        height,
      },
      comments,
    };
  };

  if (Array.isArray(model)) {
    return await Promise.all(model.map((e) => reformat(e)));
  } else return await reformat(model);
};

export default reformatProduct;
