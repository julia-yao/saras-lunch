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
            <img src="https://www.doutor.co.jp/product/file/20210706182407.jpg" className="card-img-top" alt="???" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link href="#" className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    </>
}

export default Test;