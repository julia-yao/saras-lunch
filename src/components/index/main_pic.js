const MainPic = ({ main_text, sub_text }) => {

    return <>
        <div className="MainPic container-fluid p-0">
            <div className="MainPic_bgdark"></div>
            <div className="MainPic_img p-4 p-md-5 mb-4 d-flex justify-content-center align-items-center">
                <div className="MainPic_txt text-center px-0">
                    <h1 className="text-light fw-semibold display-4 mb-4">{ main_text }</h1>
                    <p className="text-light mb-7 m-3">{ sub_text }</p>
                </div>
            </div>
        </div>
    </>
};

export default MainPic;