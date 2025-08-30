import sampleData from '@/lib/sampleData'

export default function UploadsTable() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <input placeholder="Search here.." className="border rounded px-3 py-2 text-sm w-80" />
        <div className="text-sm">Filters</div>
      </div>

      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="text-left text-xs text-gray-500">
            <th className="py-2">Document Name</th>
            <th>Type</th>
            <th>AI App Inclusion</th>
            <th>Dashboard Inclusion</th>
            <th>Stage Access</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((row) => (
            <tr key={row.id} className="border-t">
              <td className="py-3">{row.name}</td>
              <td>{row.type}</td>
              <td><input type="checkbox" defaultChecked={row.aiIncluded} /></td>
              <td><input type="checkbox" defaultChecked={row.dashboardIncluded} /></td>
              <td>
                <select className="text-sm border rounded px-2 py-1">
                  <option>{row.stage}</option>
                </select>
              </td>
              <td className="text-sm">
                <button className="underline mr-2">Delete</button>
                <button className="underline">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
