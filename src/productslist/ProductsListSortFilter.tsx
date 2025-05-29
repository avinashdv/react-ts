import { useState, useMemo } from "react";
import { ProductList, SortOption } from "../interfaces/ProductList";

const PRODUCTS: ProductList[] = [
  { id: 1, name: "T-Shirt", price: 25, category: "Clothing" },
  { id: 2, name: "Laptop", price: 899, category: "Electronics" },
  { id: 3, name: "Sneakers", price: 70, category: "Footwear" },
  { id: 4, name: "Headphones", price: 199, category: "Electronics" },
  { id: 5, name: "Jeans", price: 50, category: "Clothing" },
  { id: 6, name: "Sandals", price: 30, category: "Footwear" },
];

const CATEGORIES = ["All", "Clothing", "Electronics", "Footwear"];

const SORT_OPTIONS: SortOption[] = [
  { value: "name-asc", label: "Name (A-Z)" },
  { value: "name-desc", label: "Name (Z-A)" },
  { value: "price-asc", label: "Price (Low to High)" },
  { value: "price-desc", label: "Price (High to Low)" },
];

const ProductsListSortFilter = () => {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0].value);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (category !== "All") {
      console.log("category", category);
      result = result.filter((product) => product.category === category);
    }

    switch (sortBy) {
      case SORT_OPTIONS[0].value:
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case SORT_OPTIONS[1].value:
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case SORT_OPTIONS[2].value:
        result.sort((a, b) => a.price - b.price);
        break;
      case SORT_OPTIONS[3].value:
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    return result;
  }, [category, sortBy]);

  console.log("filteredAndSortedProducts", filteredAndSortedProducts);
  return (
    <div className="products">
      <h1>Products List</h1>
      <div>
        <select
          name="category"
          className="category-filter"
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          name="sorting"
          className="sorting-filter"
          onChange={(e) => setSortBy(e.target.value)}
        >
          {SORT_OPTIONS.map((sortOption) => (
            <option key={sortOption.value} value={sortOption.value}>
              {sortOption.label}
            </option>
          ))}
        </select>
      </div>
      {filteredAndSortedProducts.map((product: ProductList) => {
        return (
          <div className="product-list" key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsListSortFilter;
