const recordService = require("../services/recordService");

const getRecordForWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;

  const record = recordService.getRecordForWorkout(workoutId);
  res.send({ status: "OK", data: record });
};

module.exports = {
    getRecordForWorkout
}