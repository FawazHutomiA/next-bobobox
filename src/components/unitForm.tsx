import { useState } from "react";

type Props = {
  onSubmit: (unit: { name: string; type: string }) => void;
};

export default function UnitForm({ onSubmit }: Props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("capsule");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({ name, type });
    setName("");
    setType("capsule");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 flex gap-4">
      <input
        type="text"
        placeholder="Unit Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-3 py-2 rounded w-1/2"
        required
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border px-3 py-2 rounded"
      >
        <option value="capsule">Capsule</option>
        <option value="cabin">Cabin</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
        Add Unit
      </button>
    </form>
  );
}
