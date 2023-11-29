const LunchPic = ({leftSection,midSection,rightSection}) => {
    const { title, description, deco_text, category } = leftSection;
    
    return <>
        
    <div className="row g-2 my-md-4">
        <div className="col-md-4 border align-self-center">
            <div className="">
                <div className="card-title">
                    {title}
                </div>
                <div className="card-body">
                    {<p className="card-text">{description}</p>}
                </div>
                <div className="card-body">
                    {<p className="card-text">{deco_text}</p>}
                    {<p className="card-text">{category}</p>}
                </div>
            </div>
        </div>
        <div className="col-md-4 border">
            <div className="">
                <img src={midSection.image} className="img-fluid" alt=""/>
            </div>
        </div>
        <div className="col-md-4 border">
            <div className="">
                <img src={rightSection.image} className="img-fluid" alt=""/>
            </div>
        </div>
    </div>

    </>
}
 
export default LunchPic;