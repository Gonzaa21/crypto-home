import { NumericFormat } from 'react-number-format';

const TableRow = ({ coin,index }) => {
    return (
        <>
        <tr>
            <td className="py-3 pl-3 text-sm font-montserrat text-gray-700 whitespace-nowrap select-none">{index}</td>
            <td className="flex items-center p-1 text-sm font-montserrat text-gray-700 whitespace-nowrap select-none">
                <img
                    src={coin.image}
                    alt={coin.name}
                    className="p-3 size-12 pointer-events-none"
                />
                <span className="p-3 text-sm text-gray-700 whitespace-nowrap uppercase opacity-65">{coin.symbol}</span>
                <span className="p-3 text-sm text-gray-800 whitespace-nowrap">{coin.name}</span>
            </td>
            
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap leading-4"><NumericFormat value={coin.current_price} suffix=' $' thousandSeparator=',' displayType='text'/></td>
            
            <td className={coin.price_change_percentage_24h > 0 ? " text-green-800 text-sm font-semibold" : " text-red-800 text-sm font-semibold"}>
                <span className={coin.price_change_percentage_24h > 0 ? "bg-green-200 p-1.5 rounded-lg bg-opacity-50 max-[930px]:p-0" : "bg-red-200 p-1.5 rounded-lg bg-opacity-50 max-[930px]:p-0"}> {coin.price_change_percentage_24h} %
                </span>
            </td>
            
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap leading-4">
                <NumericFormat value={coin.total_volume} suffix=' $' thousandSeparator=',' displayType='text'/>
            </td>

            <td className="p-3 text-sm text-gray-700 whitespace-nowrap leading-4">
                <NumericFormat value={coin.market_cap} suffix=' $' thousandSeparator=',' displayType='text'/>
            </td>
        </tr>
        </>
    )
}

export default TableRow