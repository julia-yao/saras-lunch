const CategoryList = () => {
    
    return <>
        <div className="row">
            <div className="col">
                <div className="nav justify-content-center mb-6" id="menuTabs" role="tablist">
                    <a class="nav-link active" id="mainsTab" data-bs-toggle="tab" href="#mains" role="tab" aria-controls="mains" aria-selected="true">
                        Mains
                    </a>
                    <a className="nav-link" id="breakfastsTab" data-bs-toggle="tab" href="#breakfasts" role="tab" aria-controls="breakfasts" aria-selected="false">
                        BreakFasts
                    </a>
                    <a className="nav-link" id="lunchTab" data-bs-toggle="tab" href="#lunch" role="tab" aria-controls="lunch" aria-selected="false">
                        Lunch
                    </a>
                    <a className="nav-link" id="dessertTab" data-bs-toggle="tab" href="#dessert" role="tab" aria-controls="dessert" aria-selected="false">
                        Desserts
                    </a>
                    <a className="nav-link" id="drinksTab" data-bs-toggle="tab" href="#drinks" role="tab" aria-controls="drinks" aria-selected="false">
                        Drinks
                    </a>
                </div>
            </div>
        </div>
    </>
}
 
export default CategoryList;