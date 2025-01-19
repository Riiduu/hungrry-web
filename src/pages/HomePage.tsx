import Navbar from '../components/Navbar'
import CategoryRecipesList from '../components/CategoryRecipesList';

const HomePage = () => {
    return (
        <div className="max-width-4xl mx-auto flex flex-col justify-center items-center">
            <Navbar/>
            <CategoryRecipesList category="Salad"/>
        </div>
    );
}

export default HomePage;