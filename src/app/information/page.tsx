import { Placeholder } from "../interfaces/placeholder.interface";

const page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const placeholder: Placeholder[] = await response.json();

  return (
    <div className="bg-gray-100 p-4">
      <button className="text-2xl font-bold mb-4">Placeholders</button>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
          </tr>
        </thead>
        <tbody>
          {placeholder.length ? (
            placeholder.map((item) => (
              <tr key={item.id} className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.title}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Cargando datos...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default page;
