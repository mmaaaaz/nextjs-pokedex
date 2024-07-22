const Table = ({
  data,
  title,
}: {
  title: string
  data: { key: string; value: string | number }[]
}) => {
  return (
    <div className="mt-8 w-full overflow-hidden rounded-lg">
      <table className="w-full border-fixed table-fixed overflow-hidden">
        <thead>
          <tr>
            <th
              colSpan={2}
              className="w-full bg-secondary px-5 py-1 text-center text-lg font-semibold text-primary lg:py-2 lg:text-xl"
            >
              {title}
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((s, index: number) => {
            const { key, value } = s
            return (
              <tr key={index} className="border even:bg-primary-600">
                <td className="border border-secondary/10 p-2 text-left">
                  {key}
                </td>
                <td className="border border-secondary/10 p-2 text-left">
                  {value}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
