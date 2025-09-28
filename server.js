import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const response = await fetch("/api/seed-shop") // works
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch seed shop data" });
  }
}
