const colorCompatibility = {
    "brown": {
        "butter yellow": 3,
        "burgundy": 4,
        "dusty rose": 4,
        "champagne": 5,
        "white": 5,
        "cream": 5,
        "black": 5,
        "tan": 5,
        "beige": 5,
        "blue": 4,
        "gold": 5
    },

    "butter yellow": {
        "burgundy": 3,
        "dusty rose": 5,
        "champagne": 5,
        "white": 5,
        "cream": 5,
        "black": 4,
        "tan": 4,
        "beige": 5,
        "blue": 4,
        "gold": 5
    },

    "burgundy": {
        "dusty rose": 5,
        "champagne": 5,
        "white": 5,
        "cream": 5,
        "black": 5,
        "tan": 4,
        "beige": 5,
        "blue": 3,
        "gold": 5
    },

    "dusty rose": {
        "champagne": 5,
        "white": 5,
        "cream": 5,
        "black": 4,
        "tan": 4,
        "beige": 5,
        "blue": 4,
        "gold": 5
    },

    "champagne": {
        "white": 5,
        "cream": 5,
        "black": 5,
        "tan": 5,
        "beige": 5,
        "blue": 4,
        "gold": 5
    },

    "white": {
        "cream": 5,
        "black": 5,
        "tan": 5,
        "beige": 5,
        "blue": 5,
        "gold": 5
    },

    "cream": {
        "black": 5,
        "tan": 5,
        "beige": 5,
        "blue": 4,
        "gold": 5
    },

    "black": {
        "tan": 5,
        "beige": 5,
        "blue": 5,
        "gold": 5
    },

    "tan": {
        "beige": 5,
        "blue": 4,
        "gold": 5
    },

    "beige": {
        "blue": 4,
        "gold": 5
    },

    "blue": {
        "gold": 4
    },

    "gold": {}
};

module.exports = { colorCompatibility };