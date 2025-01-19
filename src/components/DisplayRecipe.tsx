{/** Probably a better way to do this, but as long as it works... */}
const DisplayRecipe = (props: any) => {
    return (
        <div className="bg-[var(--col-primary)] w-56 min-w-56 p-1 rounded-xl">
            <div className=" text-center">
                {/** Image */}
                {/** TODO: There's probably a way to make the images look nicer after the resize */}
                <img className="rounded-lg h-48 w-full" src={props.image} alt="" />
                {/** Food Name */}
                <h1 className="mt-3 text-lg font-bold">{props.name}</h1>
                <div className="flex justify-between w-fit space-x-2 mx-auto">
                    {/** Calories */}
                    {/** TODO: Come up with better color combinations */}
                    <h1 className="text-green-500 font-bold">{props.calories} <span className="text-white font-bold">Calories</span></h1>
                    {/** Spacer */}
                    <h1>|</h1>
                    {/** Ingredient count */}
                    <h1 className="text-green-500 font-bold">{props.ingredientsCount} <span className="text-white font-bold">Ingredients</span></h1>
                </div>
                {/** Source */}
                <h1 className="text-gray-500 font-bold text-lg mt-2">{props.source}</h1>
            </div>
        </div>
    )
}

export default DisplayRecipe