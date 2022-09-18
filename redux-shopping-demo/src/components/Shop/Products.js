import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My first book',
    description: 'This is a first product - amazing!'
  },
  {
    id: 'p2',
    price: 12,
    title: 'My second book',
    description: 'This is a second product - amazing!'
  },
  {
    id: 'p3',
    price: 18,
    title: 'My third book',
    description: 'This is a third product - amazing!'
  },
  {
    id: 'p4',
    price: 64,
    title: 'My fourth book',
    description: 'This is a fourth product - amazing!'
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        { DUMMY_PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
