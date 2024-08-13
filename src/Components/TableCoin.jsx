import TableRow from './TableRow.jsx';

function TableCoin({coins, search}) {
    const titles = ["#", "Coin", "Price", "Price Change","24h Volume","Market Cap"];

    // Filtrar la info de la API por nombre (coin.name) y simbolo (coin.symbol) usando mayus y minus (tolowerCase)
    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) | 
        coin.symbol.toLowerCase().includes(search.toLowerCase())
      );

    return(
        <>
        <div className="p-5 h-max">
            <div className="overflow-auto rounded-lg shadow md:block">
                <table className="w-full">
                    <thead className="border-b-2 border-gray-200">
                        <tr className="w-24 p-3 text-sm font-semibold tracking-wide">
                            {titles.map((title, i) => (
                                <td className='p-2 text-sm font-semibold font-montserrat tracking-wide text-left' key={i}>{title}</td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCoins.map((coin, index) => (
                          <TableRow key={coin.id} coin={coin} index={index + 1} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default TableCoin