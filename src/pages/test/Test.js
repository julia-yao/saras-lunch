import { Link } from "react-router-dom";

const Test = () => {
    /**
     * 測試使用 axios 取得資料
     */
    return <>
        <div>
            Test
        </div>
        {/* test card component */}
        <div className="card">
            <img src="https://media.istockphoto.com/id/463378191/photo/women-handbag.jpg?s=1024x1024&w=is&k=20&c=ju_6dWPYFhLniKIr1gNRb6VlHBaKrijnk4hps-ID4SI=" className="card-img-top" alt="???" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link href="#" className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    </>
}

export default Test;