"use client";

import { useUnits } from "@/hooks/useUnits";
import UnitFilters from "@/components/unitFilters";
import UnitForm from "@/components/unitForm";
import UnitList from "@/components/unitList";

export default function Home() {
  const {
    units,
    loading,
    error,
    filterType,
    setFilterType,
    filterStatus,
    setFilterStatus,
    addUnit,
    changeStatus,
    loadUnits,
  } = useUnits();

  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">Unit Management</h1>

      <UnitFilters
        filterType={filterType}
        setFilterType={setFilterType}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        onClear={() => {
          setFilterType("");
          setFilterStatus("");
        }}
      />

      <UnitForm onSubmit={addUnit} />

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <UnitList units={units} loading={loading} onStatusChange={changeStatus} />
    </main>
  );
}
