const PersonalitySummaryTable = ({ personality }) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border border-gray-600">
                <thead>
                  <tr aria-colspan={2}>
                    <th className="border-b p-2 text-black bg-white ">
                      <h1>Personality Summary</h1>
                    </th>
                    <th className="border-b p-2 text-black bg-white"></th>
                  </tr>
                </thead>

                <tbody>
                  {personality.map((element, index) => {
                    return (
                      <tr
                        key={index}
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
                                {item.text}
                                {index !== element.values.length - 1 && (
                                  <span> / </span>
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
