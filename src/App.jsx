import { useState, useEffect } from 'react'
import axios from 'axios'

import Nav from './Components/Nav.jsx'
import TableCoin from './Components/TableCoin.jsx'
import Footer from './Components/Footer.jsx'

function App() {
    
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    const getData = async () => {
        try {
            // Llamar a la API
            const res = await axios.get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            );
            // Uso de useState para luego de llamar a la API, actualize el estado del valor de cada componente
            setCoins(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <Nav />


            {/* Search Component */}
            <div className="flex md:mx-20 max-[768px]:flex-col overflow-x-hidden">
                <h1 className="flex items-center font-montserrat font-bold text-2xl max-[768px]:text-xl max-[768px]:justify-center max-[768px]:text-center max-[768px]:px-2 pr-5">Main cryptocurrencies on the market</h1>
                <hr className="hidden max-[768px]:block h-max m-3"/>
                <div className="p-[10px] overflow-hidden w-[38px] h-[38px] hover:w-[270px] bg-[#5b40f4] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-700 duration-700 delay-150 max-[768px]:mx-5 max-[768px]:w-full max-[768px]:hover:w-full max-[768px]:h-auto">
                    <div className="flex items-center justify-center fill-white max-[768px]:pl-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="17"
                          height="17"
                        >
                            <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"></path>
                        </svg>
                    </div>
                    <input 
                    type="text" 
                    className="outline-none text-lg bg-transparent w-full text-white font-normal px-4 max-[768px]:w-full max-[768px]:hover:duration-0" 
                    onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>


            <TableCoin coins={coins} search={search}/>
            <Footer />
        </>
    )
}

export default App