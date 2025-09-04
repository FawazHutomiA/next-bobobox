export type UnitStatus =
  | "Available"
  | "Occupied"
  | "Cleaning In Progress"
  | "Maintenance Needed";

export type UnitType = "capsule" | "cabin";

export type Unit = {
  id: string;
  name: string;
  type: UnitType;
  status: UnitStatus;
  lastUpdated: string;
};
