"use client";

import { useEffect, useState } from "react";
import { Unit } from "@/types/unit";
import { fetchUnits, createUnit, updateUnitStatus } from "@/lib/api";
import { showToast } from "@/lib/toast";

export function useUnits() {
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [filterType, setFilterType] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");

  const loadUnits = async () => {
    setLoading(true);
    try {
      const data = await fetchUnits(filterStatus, filterType);
      setUnits(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch units");
      showToast("error", err.message || "Failed to fetch units");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUnits();
  }, [filterStatus, filterType]);

  const addUnit = async (unit: { name: string; type: string }) => {
    try {
      const res = await createUnit({
        ...unit,
        type: unit.type as Unit["type"],
        status: "Available",
      });

      if (res.status === "OK") {
        showToast("success", res.message);
      } else {
        showToast("error", res.message);
      }

      await loadUnits();
    } catch (err: any) {
      showToast("error", err.message || "Failed to create unit");
    }
  };

  const changeStatus = async (id: string, status: string) => {
    try {
      const res = await updateUnitStatus(id, status);
      if (res.status === "OK") {
        showToast("success", res.message);
      } else {
        showToast("error", res.message);
      }

      await loadUnits();
    } catch (err: any) {
      showToast("error", err.message || "Failed to update status");
      console.log(err.message);
    }
  };

  return {
    units,
    loading,
    error,
    filterType,
    setFilterType,
    filterStatus,
    setFilterStatus,
    loadUnits,
    addUnit,
    changeStatus,
  };
}
