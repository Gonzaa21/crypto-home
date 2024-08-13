import { FaFacebook,FaInstagram,FaGithub,FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <>
        <div>
            <div className="mt-10 text-center">
                <ul>
                    <li className="inline-block p-4">
                        <a href="#" className="text-gray-700 font-medium no-underline hover:text-gray-800">About</a>
                    </li>
                    <li className="inline-block p-4">
                        <a href="#" className="text-gray-700 font-medium no-underline hover:text-gray-800">Blog</a>
                    </li>
                    <li className="inline-block p-4">
                        <a href="#" className="text-gray-700 font-medium no-underline hover:text-gray-800">Policy</a>
                    </li>
                    <li className="inline-block p-4">
                        <a href="#" className="text-gray-700 font-medium no-underline hover:text-gray-800">Terms</a>
                    </li>
                    <li className="inline-block p-4">
                        <a href="#" className="text-gray-700 font-medium no-underline hover:text-gray-800">Community</a>
                    </li>
                    <li className="inline-block p-4">
                        <a href="#" className="text-gray-700 font-medium no-underline hover:text-gray-800">Partners</a>
                    </li>
                </ul>
            </div>
            <div className="flex justify-center text-2xl text-center">
                <a href="#" className="p-4 text-gray-600 hover:text-gray-800"><FaFacebook /></a>
                <a href="#" className="p-4 text-gray-600 hover:text-gray-800"><FaInstagram /></a>
                <a href="#" className="p-4 text-gray-600 hover:text-gray-800"><FaXTwitter /></a>
                <a href="#" className="p-4 text-gray-600 hover:text-gray-800"><FaGithub /></a>
                <a href="#" className="p-4 text-gray-600 hover:text-gray-800"><FaDiscord /></a>
            </div>
            <div className="m-5 text-gray-600 text-xs text-center">
                <p>© 2024 CryptoHome, Inc. All rights reserved.</p>
            </div>
        </div>
        </>
    )
}

export default Footer