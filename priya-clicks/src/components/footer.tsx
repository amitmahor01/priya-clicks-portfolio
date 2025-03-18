export default function Footer(){
 return(
    <>
    <div className="flex flex-wrap justify-around p-8 bg-primary border-t-1 border-gray-600">
        <div className="m-4 min-w-[200px]">
            <h3 className="mb-4 text-gray-800 font-extrabold">Contact Information</h3>
            <p className="my-2 text-gray-600">
                <i className="fas fa-map-marker-alt mr-2"></i>Abu Dhabi, United Arab Emirates
            </p>
            <p className="my-2 text-gray-600">
                <i className="fas fa-phone-alt mr-2"></i>+971 58-595-0475
            </p>
            <p className="my-2">
                <a href="mailto:priiyaclicks@gmail.com" 
                   className="text-gray-600 no-underline hover:font-bold">
                    <i className="fas fa-envelope mr-2"></i>priiyaclicks@gmail.com
                </a>
            </p>
            <p className="my-2">
                <a href="https://api.whatsapp.com/message/NYOV5OZAEGG3H1" 
                   className="text-gray-600 no-underline hover:font-bold"
                   target="_blank" 
                   rel="noopener noreferrer">
                    <i className="fab fa-whatsapp mr-2"></i>WhatsApp
                </a>
            </p>
        </div>
        
        <div className="m-4 min-w-[200px]">
            <h3 className="mb-4 text-gray-800 font-extrabold" >Opening Hours</h3>
            <p className="my-2 text-gray-600">Monday - Friday: 9 AM - 6 PM</p>
            <p className="my-2 text-gray-600">Saturday: 10 AM - 4 PM</p>
            <p className="my-2 text-gray-600">Sunday: Closed</p>
        </div>
        
        <div className="m-4 min-w-[200px]">
            <h3 className="mb-4 text-gray-800 font-extrabold">Follow Us</h3>
            <p className="my-2">
                <a href="https://www.instagram.com/priiyaclicks" 
                   className="text-gray-600 no-underline hover:font-bold"
                   target="_blank" 
                   rel="noopener noreferrer">
                    <i className="fab fa-instagram mr-2"></i>Instagram
                </a>
            </p>
            <p className="my-2">
                <a href="https://www.facebook.com/PriiyaClicks/" 
                   className="text-gray-600 no-underline hover:font-bold"
                   target="_blank" 
                   rel="noopener noreferrer">
                    <i className="fab fa-facebook mr-2"></i>Facebook
                </a>
            </p>
            <p className="my-2">
                <a href="https://www.youtube.com/@PriyaClicks" 
                   className="text-gray-600 no-underline hover:font-bold"
                   target="_blank" 
                   rel="noopener noreferrer">
                    <i className="fab fa-youtube mr-2"></i>YouTube
                </a>
            </p>
        </div>
        
        <div className="w-full mt-8 pt-4 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} PriiyaClicks. All rights reserved.</p>
        </div>
    </div>
    </>
 );   
};