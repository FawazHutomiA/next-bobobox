import { Unit } from "@/types/unit";

const API_URL = "http://localhost:8080/api/v1";

export type ApiResponse<T> = {
    status: string;
    message: string;
    errors: { msg: string }[] | null;
    data: T | null;
};

export async function fetchUnits(
    status?: string,
    type?: string,
    limit?: number
): Promise<Unit[]> {
    const params = new URLSearchParams();

    if (status) params.append("status", status);
    if (type) params.append("type", type);
    if (limit) params.append("limit", limit.toString());
    if (!limit) params.set("limit", "100");
    
    const res = await fetch(
        `${API_URL}/units${params.toString() ? `?${params.toString()}` : ""}`,
        { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch units");
    const json = await res.json();

    // Ambil dari data.records dan map ke tipe Unit
    return (json.data.records || []).map((u: any) => ({
        id: u.ID,
        name: u.name,
        type: u.type,
        status: u.status,
        lastUpdated: u.lastUpdated,
    }));
}


export async function createUnit(
    data: Partial<Unit>
): Promise<ApiResponse<Unit>> {
    const res = await fetch(`${API_URL}/units`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Failed to create unit");
    return res.json();
}

export async function updateUnitStatus(
    id: string,
    status: string
): Promise<ApiResponse<Unit>> {
    const res = await fetch(`${API_URL}/units/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
    });

    const json = await res.json();

    if (!res.ok) throw new Error(json.message || "Failed to update status");

    return json;
}
