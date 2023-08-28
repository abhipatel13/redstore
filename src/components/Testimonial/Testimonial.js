import './Testimonial.css';
import User1 from '../images/user-1.png';
import User2 from '../images/user-2.png';
import User3 from '../images/user-3.png';

const Testimonial = () => {
    return (
        <div class="testimonial">
            <div class="small-container">
                <div class="row">
                    <div class="col-3">
                        <i class="fa fa-quote-left"></i>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus minima laboriosam ullam
                            perferendis aspernatur pariatur nemo est minus assumenda! In nisi sint aspernatur, architecto
                            fuga debitis numquam voluptates omnis cupiditate.</p>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <img src={User1} />
                        <h3>Sean Parker</h3>
                    </div>
                    <div class="col-3">
                        <i class="fa fa-quote-left"></i>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus minima laboriosam ullam
                            perferendis aspernatur pariatur nemo est minus assumenda! In nisi sint aspernatur, architecto
                            fuga debitis numquam voluptates omnis cupiditate.</p>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <img src={ User2 } />
                        <h3>Sean Parker</h3>
                    </div>
                    <div class="col-3">
                        <i class="fa fa-quote-left"></i>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus minima laboriosam ullam
                            perferendis aspernatur pariatur nemo est minus assumenda! In nisi sint aspernatur, architecto
                            fuga debitis numquam voluptates omnis cupiditate.</p>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <img src={ User2 } />
                        <h3>Sean Parker</h3>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Testimonial;