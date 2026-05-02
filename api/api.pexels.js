export default async function handler(req, res) {
    const query = req.query.q || "croche";

    const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=12`, {
        headers: {
            Authorization: process.env.PEXELS_KEY
        }
    });

    const data = await response.json();
    res.status(200).json(data);
}