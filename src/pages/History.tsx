

const History = () => {
    return (
        <div className="gap-y flex flex-1 flex-col items-center justify-center gap-4 p-4">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">Name</th>
                    <th scope="col" className="px-6 py-3">Duration</th>
                    <th scope="col" className="px-6 py-3">Upload Date</th>
                    <th scope="col" className="px-6 py-3">Transcript</th>
                    <th scope="col" className="px-6 py-3">
                    <span className="sr-only"></span>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                    <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">Boston AI Introduction</th>
                    <td className="px-6 py-4">03:34</td>
                    <td className="px-6 py-4">11/10/2024</td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">View Result</a>
                    </td>
                </tr>
                <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                    <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">Microsoft Training</th>
                    <td className="px-6 py-4">23:15</td>
                    <td className="px-6 py-4">11/14/2024</td>
                    <td className="px-6 py-4">$1999</td>
                    <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">View Result</a>
                    </td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600">
                    <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">Uber, for dogs</th>
                    <td className="px-6 py-4">04:13</td>
                    <td className="px-6 py-4">Accessories</td>
                    <td className="px-6 py-4">$99</td>
                    <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">View Result</a>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default History
