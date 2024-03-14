import Profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between lg:p-6 border-b-2  lg:max-w-7xl lg:mx-auto mx-[10%] py-4'>
            <h1 className="text-3xl lg:text-4xl font-bold">Knowledge Cafe</h1>
            <img src={Profile} alt="" />
        </header>
    );
};

export default Header;