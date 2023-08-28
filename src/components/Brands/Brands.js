import './Brands.css'
import Godrej from '../images/logo-godrej.png';
import Cocacola from '../images/logo-coca-cola.png';
import Oppo from '../images/logo-oppo.png';
import Paypal from '../images/logo-paypal.png';
import Philips from '../images/logo-philips.png';

const Brands = () => {
    return (
        <>
            <div class="brands">
                <div class="small-container">
                    <div class="row">
                        <div class="col-5">
                            <img src={ Godrej } alt="" />
                        </div>
                        <div class="col-5">
                            <img src={ Cocacola } alt="" />
                        </div>
                        <div class="col-5">
                            <img src={ Oppo } alt="" />
                        </div>
                        <div class="col-5">
                            <img src={ Paypal } alt="" />
                        </div>
                        <div class="col-5">
                            <img src={ Philips } alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Brands;