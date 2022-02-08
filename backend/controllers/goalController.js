// @desc Get goals
// @Route GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "get goals" })
}

// @desc Set goals
// @Route POST /api/goals
// @access Private
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("Please add a text field")
  }
  res.status(200).json({ message: "Set goal" })
}

// @desc Update goals
// @Route GET /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` })
}

// @desc Delete goal
// @Route Delete /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` })
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
