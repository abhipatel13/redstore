import './Products.css';
import Product1 from '../images/product-1.jpg'
import Product2 from '../images/product-2.jpg'
import Product3 from '../images/product-3.jpg'
import Product4 from '../images/product-4.jpg'
import Product5 from '../images/product-5.jpg'
import Product6 from '../images/product-6.jpg'
import Product7 from '../images/product-7.jpg'
import Product8 from '../images/product-8.jpg'
import Product9 from '../images/product-9.jpg'
import Product10 from '../images/product-10.jpg'
import Product11 from '../images/product-11.jpg'
import Product12 from '../images/product-12.jpg'

const Products = () => {
    return (
        <>
            <div class="small-container">
                <h2 class="title">Featured Products</h2>
                <div class="row">
                    <div class="col-4">
                        <img src={Product1} />
                        <h4>Red Printed TShirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div class="col-4">
                        <img src={ Product2 } />
                        <h4>Red Printed TShirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div class="col-4">
                        <img src={ Product3 } />
                        <h4>Red Printed TShirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div class="col-4">
                        <img src={ Product4 } />
                        <h4>Red Printed TShirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                </div>
                <h2 class="title">Latest Products</h2>
                <div class="row">
                    <div class="col-4">
                        <img src={ Product5 } />
                        <h4>Red Printed TShirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div class="col-4">
                        <img src={ Product6 } />
                        <h4>Red Printed TShirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div class="col-4">
                        <img src={ Product7 } />
                        <h4>Red Printed TShirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div class="col-4">
                        <img src={ Product8 } />
                        <h4>Red Printed TShirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div class="col-4">
                        <img src={ Product9 } />
                        <h4>Red Printed TShirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div class="col-4">
                        <img src= { Product10 } />
                        <h4>Red Printed TShirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div class="col-4">
                        <img src={ Product11 } />
                        <h4>Red Printed TShirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div class="col-4">
                        <img src={ Product12 } />
                        <h4>Red Printed TShirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Products;