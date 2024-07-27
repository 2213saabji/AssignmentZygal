import PropTypes from 'prop-types';

export default function Scrollbar(){
    const avatars = Array.from({ length: 100 }, (_, index) => index);
    return (
        <>
        <nav className="bg-gray-800 p-4 fixed top-0 left-0 right-0 z-10">
        <div className="scroll-container flex overflow-x-auto gap-10 whitespace-nowrap py-2">
          {avatars.map((item)=>(
            <img
                key={item}
                src="/avtar.avif"
                alt="Avatar"
                className="w-20 h-20 rounded-full object-cover"
              />
          ))}
       
        </div>
      </nav>
        <div className="scroll-container flex flex-col items-center overflow-x-auto gap-10 whitespace-nowrap py-2 pt-[150px]">
          {avatars.map((item)=>(
            <img
                key={item}
                src="/img.webp"
                alt="Avatar"
                className=" w-[350px]  h-[400px] object-cover"
              />
          ))}
       
        </div>
        </>
    )
}
Scrollbar.propTypes = {
    setpaginate: PropTypes.func.isRequired,
  };