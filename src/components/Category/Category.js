import './Category.css';
import Category1 from '../images/category-1.jpg';
import Category2 from '../images/category-2.jpg';
import Category3 from '../images/category-3.jpg';

const Category = () => {
    return (
        <>
            <div class="categories">
                <div class="small-container">
                    <div class="row">
                        <div class="col-3">
                            <img src={Category1} alt=""/>
                        </div>
                        <div class="col-3">
                            <img src={Category2} alt=""/>
                        </div>
                        <div class="col-3">
                            <img src={Category3} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category;
