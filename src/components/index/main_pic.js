const MainPic = ({main_text, sub_text}) => {
    return <>
        <div className="container-fluid p-0">
            <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary" style={{}}>
                <div className="col-lg-6 px-0">
                    <h1 className="display-4">{ main_text }</h1>
                    <p className="lead my-3">{ sub_text }</p>
                </div>
            </div>
        </div>
    </>
};

export default MainPic;