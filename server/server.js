const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const restaurants = require("./restaurants.json");

app.use(cors());

app.get("/api", (req, res) => {
    const search = req.query.search;
    let filteredRestaurants = restaurants;

    if (search) {
        const searchLower = search.toLowerCase();
        filteredRestaurants = restaurants.filter(
            (restaurant) =>
                restaurant.name.toLowerCase().includes(searchLower) ||
                restaurant.address.toLowerCase().includes(searchLower) ||
                restaurant.tags.some((tag) =>
                    tag.toLowerCase().includes(searchLower)
                )
        );
    }

    res.json({ restaurants: filteredRestaurants });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
