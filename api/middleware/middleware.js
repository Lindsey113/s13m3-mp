const User = require('../users/users-model')

function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url})}`
  )
  next()
}

async function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  try {
    const user = await User.getById(req.params.id)
    if (!user) {
      res.status(404).json({
        message: "No user found with the given ID"
      })
    } else {
      req.user = user
      next()
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    })
  }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules


module.exports = {
  logger,
  validatePost,
  validateUser,
  validateUserId
}