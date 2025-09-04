type Props = {
  filterType: string;
  setFilterType: (value: string) => void;
  filterStatus: string;
  setFilterStatus: (value: string) => void;
  onClear: () => void;
};

export default function UnitFilters({
  filterType,
  setFilterType,
  filterStatus,
  setFilterStatus,
  onClear,
}: Props) {
  return (
    <div className="flex gap-4 mb-6">
      <select
        className="border rounded px-3 py-2"
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="">All Types</option>
        <option value="capsule">Capsule</option>
        <option value="cabin">Cabin</option>
      </select>

      <select
        className="border rounded px-3 py-2"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Available">Available</option>
        <option value="Occupied">Occupied</option>
        <option value="Cleaning In Progress">Cleaning In Progress</option>
        <option value="Maintenance Needed">Maintenance Needed</option>
      </select>

      <button onClick={onClear} className="bg-gray-200 px-4 py-2 rounded cursor-pointer">
        Clear
      </button>
    </div>
  );
}
