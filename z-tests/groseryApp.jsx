import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const Product = props => {
  const plus = () => {
    props.onVote('plus', props.index);
  };
  const minus = () => {
    props.onVote('minus', props.index);
  };
  return (
    <li key={props.index}>
      <span>{props.product.name}</span> - <span>votes: {props.product.votes}</span>
      <button onClick={plus}>+</button>{" "}
      <button onClick={minus}>-</button>
    </li>
  );
};

const GroceryApp = (props) => {
  let [products, setProducts] = React.useState(props.products);
  const onVote = (dir, index) => {
    const newProducts = [...products]

    if (dir === 'plus') {
      newProducts[index].votes += 1;
    } else {
      newProducts[index].votes -= 1;
    }
    setProducts(newProducts)
  };

  useEffect(() => {

  }, [products]);

  return (
    <ul>
      {products.map((p, i) => {
        return (
          <Product product={p} index={i} onVote={onVote}/>
        )
      })}
    </ul>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<GroceryApp
  products={[
    { name: "Oranges", votes: 0 },
    { name: "Bananas", votes: 0 }
  ]}
/>);


// DONE!!!! 100%