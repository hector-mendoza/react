import { useLocation, useNavigate } from "react-router-dom";

const Products = () => {

    // NOTE: Hook => Uselocation()
    let location = useLocation();
    let { search } = location;

    // Serialize the URL
    let query = new URLSearchParams(search);

    // Show 10 by 10 - pagination
    const LIMIT = 10;

    // convert to INT so we can add/decrease values of the pagination
    let start = parseInt(query.get("start")) || 1,
        end = parseInt(query.get("end")) || LIMIT;

    // NOTE: Hook => useNavigate()
    let navigate = useNavigate();
    // console.log(navigate);


    const handlePrev = () => {
        navigate(`?start=${start - LIMIT}&end=${end - LIMIT}`)
    }
    const handleNext = () => {
        navigate(`?start=${start + LIMIT}&end=${end + LIMIT}`)
    }

    // /products?start=1&end=2
    return (
        <div>
            <h3>Products</h3>
            <p>Showing products of <b>{start}</b>-<b>{end}</b></p>

            {/* if start is more than LIMIT */}
            {
                start > LIMIT && <button onClick={handlePrev}>PREV</button>
            }
            <button onClick={handleNext}>NEXT</button>
        </div>
    );
}

export default Products;