import Navigo  from 'navigo';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import Home from '../components/home';
import Product from '../components/product';
import DetailProduct from '../components/detailProduct';
import ShoppingCart from '../components/cart';
import CheckOut from '../components/checkOut';
import About from '../components/about';
import Contact from '../components/contact';

export const router = new Navigo('/');
const handleLayout = (Component, params) => {
    return (`
        ${Header()}
        ${Component(params)}
        ${Footer()}
    `)
}
//document.querySelector('#app').innerHTML
const Router = () => {
      router.on('/', function () {
        document.querySelector('#app').innerHTML = handleLayout(Home);
      });

      router.on('/product', function () {
        document.querySelector('#app').innerHTML = handleLayout(Product);
      });

      router.on('/product/:id', function (params) {
       
        document.querySelector('#app').innerHTML = handleLayout(DetailProduct, params.data);
      });

      router.on('/cart', function () {
        document.querySelector('#app').innerHTML = handleLayout(ShoppingCart);
      });

      router.on('/checkout', function () {
        document.querySelector('#app').innerHTML = handleLayout(CheckOut);
      });

      router.on('/about', function () {
        document.querySelector('#app').innerHTML = handleLayout(About);
      });

      router.on('/contact', function () {
        document.querySelector('#app').innerHTML = handleLayout(Contact);
      });
      
      

      router.resolve();
}

document.body.addEventListener('click', (e) => {

  var parentATag = e.target.closest('a[data-navigo]');
  if(parentATag) {
      var hrefValue = parentATag.getAttribute('href');
      e.preventDefault();
      router.navigate(hrefValue);
      document.documentElement.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant", 
      });
  } 
});

export default Router;