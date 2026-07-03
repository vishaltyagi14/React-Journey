import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const fetchProd = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    // console.log(data)
    if (data && data.products) {
      setProduct(data.products);
    }
  };
  // console.log(product)

  useEffect(() => {
    fetchProd();
  }, []);

  const selectedPageHandle = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= product.length / 10 &&
      selectedPage != page
    )
      setPage(selectedPage);
  };
  return (
    <>
      <div>
        {product.length > 0 && (
          <div className="products">
            {product.slice(page * 10 - 10, page * 10).map((prod) => {
              return (
                <span className="products_single" key={prod.id}>
                  <img src={prod.thumbnail} alt={prod.title} />
                  <span>{prod.title}</span>
                </span>
              );
            })}
          </div>
        )}

        {product.length > 0 && (
          <div className="pagination">
            <span onClick={() => selectedPageHandle(page - 1)}
              className={page>1? "pagination_enabled":"pagination_disabled"}
              >←</span>
            {[...Array(product.length / 10)].map((_, i) => {
              return (
                <span
                  className={page === i + 1 ? " pagination_selected" : ""}
                  onClick={() => selectedPageHandle(i + 1)}
                  id={i}
                >
                  {i + 1}
                </span>
              );
            })}
            <span onClick={() => selectedPageHandle(page + 1)}
              className={page<product.length/10? "pagination_enabled":"pagination_disabled"}
              >→</span>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
