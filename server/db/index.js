const { Pool } = require("pg");

const pool = new Pool();

module.exports = {
  query: async (text, params) => {
    try {
      return await pool.query(text, params);
    } catch (error) {
      console.error("Database query error:", error);
      throw new Error("Database query failed");
    }
  },
};
