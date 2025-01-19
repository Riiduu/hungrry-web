// Mui icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { FavoriteBorder } from '@mui/icons-material';

const Navbar = () => {
    return (
        <div className="bg-[var(--col-primary)] flex flex-col w-full p-5 sm:justify-between sm:flex-row items-center">
            <div className="flex flex-row  justify-between items-center sm:justify-start">
                <div className="cursor-pointer sm:hidden">
                    <MenuIcon fontSize="large"/>
                </div>

                <h1 className="text-3xl font-bold cursor-pointer">Hungrry</h1>
                {/* Just an empty div for the spacing. Probably a better way out there, but this works, so why not */}
                <div></div>
            </div>
            <div className='space-x-3'>
                {/** TODO: Figure out how to make them thinner */}
                <SearchIcon fontSize='large' className='text-white cursor-pointer'/>
                <FavoriteBorder fontSize='large' className='text-white cursor-pointer'/>
            </div>
            <form className="flex flex-col w-full pt-5 sm:hidden">
                <div className="flex flex-row items-center bg-white pl-3 rounded-lg">
                    <SearchIcon />
                    {/** TODO: Add input functionality */}
                    <input className="p-2 rounded-lg w-full focus:outline-none" onSubmit={() => {}} placeholder="List ingredients" type="text"/>
                </div>
            </form>
        </div>
    )
}

export default Navbar;