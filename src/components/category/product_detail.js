const ProductDetail = () => {
   
    return <>
        <div class="modal modal-sheet position-static d-block bg-light py-5" tabindex="-1" role="dialog" id="modalSheet">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content rounded-6 shadow">
                    <div class="modal-header border-bottom-0">
                        <h5 class="modal-title">商品詳情</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-8">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="tns-outer" id="productModal-ow">
                                    <div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">1</span>  of 4</div>
                                    <div id="productModal-mw" class="tns-ovh">
                                        <div class="tns-inner" id="productModal-iw">
                                            <div class="product productModal  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="productModal" >
                                                <div class="zoom tns-item tns-slide-active" onmousemove="zoom(event)"  id="productModal-item0">
                                                    <img src="https://www.doutor.co.jp/product/file/20111201202302.jpg" alt="" className="img-fluid"/>
                                                </div>
                                                <div class="tns-item" id="productModal-item1" aria-hidden="true" tabindex="-1">
                                                    <div class="zoom" onmousemove="zoom(event)" >
                                                        <img src="https://www.doutor.co.jp/product/file/20111201202302.jpg" alt="" className="img-fluid"/>
                                                    </div>
                                                </div>
                                                <div class="tns-item" id="productModal-item2" aria-hidden="true" tabindex="-1">
                                                    <div class="zoom" onmousemove="zoom(event)" >
                                                        <img src="https://www.doutor.co.jp/product/file/20111201202302.jpg" alt="" className="img-fluid"/>
                                                    </div>
                                                </div>
                                                <div class="tns-item" id="productModal-item3" aria-hidden="true" tabindex="-1">
                                                    <div class="zoom" onmousemove="zoom(event)" >
                                                        <img src="https://www.doutor.co.jp/product/file/20111201202302.jpg" alt="" className="img-fluid"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-tools">
                                    <div class="thumbnails row g-3" id="productModalThumbnails" aria-label="Carousel Pagination">
                                        <div class="col-3 tns-nav-active" data-nav="0" aria-label="Carousel Page 1 (Current Slide)" aria-controls="productModal">
                                            <div class="thumbnails-img">
                                                <img src="https://www.doutor.co.jp/product/file/20111201203140.jpg" alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                        <div class="col-3" data-nav="1" tabindex="-1" aria-label="Carousel Page 2" aria-controls="productModal">
                                            <div class="thumbnails-img">
                                                <img src="https://www.doutor.co.jp/product/file/20111201203140.jpg" alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                        <div class="col-3" data-nav="2" tabindex="-1" aria-label="Carousel Page 3" aria-controls="productModal">
                                            <div class="thumbnails-img">
                                                <img src="https://www.doutor.co.jp/product/file/20111201203140.jpg" alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                        <div class="col-3" data-nav="3" tabindex="-1" aria-label="Carousel Page 4" aria-controls="productModal">
                                            <div class="thumbnails-img">
                                                <img src="https://www.doutor.co.jp/product/file/20111201203140.jpg" alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="ps-lg-8 mt-6 mt-lg-0">
                                <a href="/!" class="mb-4 d-block">Bakery Biscuits</a>
                                <h2 class="mb-1 h1">Napolitanke Ljesnjak</h2>
                                <div class="mb-4">
                                    <small class="text-warning">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-half"></i>
                                    </small>
                                    <a href="/" class="ms-2">(30 reviews)</a>
                                </div>
                                <div class="fs-4">
                                    <span class="fw-bold text-dark">$32</span>
                                </div>
                                <hr class="my-6"/>
                                <div>
                                    <div class="input-group input-spinner">
                                        <input type="button" value="-" class="button-minus btn btn-sm" data-field="quantity"/>
                                        <input type="number" step="1" max="10" value="1" name="quantity" class="quantity-field form-control-sm form-input"/>
                                        <input type="button" value="+" class="button-plus btn btn-sm" data-field="quantity"/>
                                    </div>
                                </div>
                                <div class="mt-3 row justify-content-start g-2 align-items-center">
                                    <div class="col-lg-4 col-md-5 col-6 d-grid">
                                        <button type="button" class="btn btn-primary">
                                            <i class="feather-icon icon-shopping-bag me-2"></i>
                                            Add to cart
                                        </button>
                                    </div>
                                    <div class="col-md-4 col-5">
                                        <a class="btn btn-light" href="/" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare"><i class="bi bi-arrow-left-right"></i></a>
                                        <a class="btn btn-light" href="/" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist"><i class="feather-icon icon-heart"></i></a>
                                    </div>
                                </div>
                                <hr class="my-6"/>
                                <div>
                                    <table class="table table-borderless">
                                        <tbody>
                                            <tr>
                                            <td>Product Code:</td>
                                            <td>FBB00255</td>
                                            </tr>
                                            <tr>
                                            <td>Availability:</td>
                                            <td>In Stock</td>
                                            </tr>
                                            <tr>
                                            <td>Type:</td>
                                            <td>Fruits</td>
                                            </tr>
                                            <tr>
                                            <td>Shipping:</td>
                                            <td>
                                                <small>
                                                    01 day shipping.
                                                    <span class="text-muted">( Free pickup today)</span>
                                                </small>
                                            </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
 
export default ProductDetail;