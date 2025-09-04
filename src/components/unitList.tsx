import { Unit } from "@/types/unit";

type Props = {
  units: Unit[];
  loading: boolean;
  onStatusChange: (id: string, status: string) => void;
};

export default function UnitList({ units, loading, onStatusChange }: Props) {
  if (loading) return <p>Loading...</p>;
  if (!units.length) return <p className="text-gray-600">No units found.</p>;

  return (
    <table className="w-full border-collapse mt-6 shadow-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2 text-left">Name</th>
          <th className="border p-2 text-left">Type</th>
          <th className="border p-2 text-left">Status</th>
          <th className="border p-2 text-left">Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {units.map((unit) => (
          <tr key={unit.id} className="hover:bg-gray-50">
            <td className="border p-2">{unit.name}</td>
            <td className="border p-2 capitalize">{unit.type}</td>
            <td className="border p-2">
              <select
                value={unit.status}
                onChange={(e) => onStatusChange(unit.id, e.target.value)}
                className="border rounded px-2 py-1"
              >
                <option value="Available">Available</option>
                <option value="Occupied">Occupied</option>
                <option value="Cleaning In Progress">Cleaning In Progress</option>
                <option value="Maintenance Needed">Maintenance Needed</option>
              </select>
            </td>
            <td className="border p-2">{new Date(unit.lastUpdated).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
