import { useState } from "react";

export  const data = [{ "src": "https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_260,h_205,dpr_2/offermgmt/images/banner/RR_ICICI_F_0501.jpg", "alt": "image 1 for carousel" },
    { "src": "https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_260,h_205,dpr_2/offermgmt/images/banner/RR_CTAYODHYA_F_1101.jpg", "alt": "image 2 for carousel" },
    { "src": "https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_260,h_205,dpr_2/offermgmt/images/banner/RR_TatkaalDeals_F_1101.jpg", "alt": "image 3 for carousel" },
    ]

function Carousel() {
    const [slide, setSlide] = useState(0);

    return (
        <div className="flex-col">
        <div className="relative w-[330px] h-[305px] mb-5  flex justify-center items-center">
            {data.map((item, idx) => (
                <img
                    src={item.src}
                    alt={item.alt}
                    key={idx}
                    className={`absolute w-full h-full rounded-md shadow-md transition-opacity duration-500 ${slide === idx ? "opacity-100" : "opacity-0"}`}
                />
            ))}
        </div>
            <div className="flex justify-around items-center">
         
                <span className="flex gap-8">
                    {data.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSlide(idx)}
                            className={`h-2.5 w-2.5 rounded-full bg-gray-600 transition-all duration-300 ${slide === idx ? "w-3.5 h-2.5 bg-white shadow-md" : "bg-gray-400"}`}
                        />
                    ))}
                </span>
  
            </div>
            </div>
    );
}

export default Carousel;
