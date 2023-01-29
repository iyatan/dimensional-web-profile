const PersonalitySummaryTable = ({ personality }) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border border-gray-600">
                <thead>
                  <tr>
                    <th className="border-b text-left p-2  border-gray-600 text-black bg-white ">
                      <h1>Personality Summary</h1>
                    </th>
                    <th className="border-b py-2 text-black bg-white"></th>
                  </tr>
                </thead>

                <tbody>
                  {personality.map((element, i) => {
                    return (
                      <tr
                        key={i}
                        className="bg-black text-white border-gray-600 border-b"
                      >
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium ">
                          {element.title}
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-right">
                          {element.values.map((item, index) => {
                            return (
                              <span
                                key={index}
                                className={
                                  item.isHighlighted ? "" : "text-gray-500"
                                }
                              >
                                {i === 0 && (
                                  <span className="rounded-full bg-yellow-500 text-sm h-3 w-3 inline-block mr-1"></span>
                                )}
                                {item.text}
                                {index !== element.values.length - 1 && (
                                  <span className="text-gray-500"> / </span>
                                )}
                              </span>
                            );
                          })}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalitySummaryTable;
