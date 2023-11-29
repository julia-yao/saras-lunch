const Product = () => {
    return <>
        <div className="row">
            <div className="col-6 col-lg-4 border m-2">
                <div className="card border-0">
                    <img className="card-img-top" src="http://www.w3.org/2000/svg" alt="..."/>
                    <div className="card-body">
                        <div className="row mb-2">
                            <div className="col">
                                <h5 className="mb-0">Lorem ipsum dolor</h5>
                            </div>
                            <div className="col-auto">
                                <span className="fs-4 font-serif text-black">$32</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-4 border m-2">
                <div className="card border-0">
                    <img className="card-img-top" src="http://www.w3.org/2000/svg" alt="..."/>
                    <div className="card-body">
                        <div className="row mb-2">
                            <div className="col">
                                <h5 className="mb-0">Lorem ipsum dolor</h5>
                            </div>
                            <div className="col-auto">
                                <span className="fs-4 font-serif text-black">$32</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>;
}
 
export default Product;