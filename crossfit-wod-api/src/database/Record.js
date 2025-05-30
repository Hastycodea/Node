const DB = require("./db.json");

const getRecordForWorkout = (workoutId) => {
  try {
    const record = DB.records.filter((record) => record.workout === workoutId);

    if (record.length === 0) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`
      };
    }
    return record;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

module.exports = { getRecordForWorkout };
