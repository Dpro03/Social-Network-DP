const { Thought, User } = require("../models");
const thoughtController = {
  // get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .select("-__v")
      .sort({
        _id: -1,
      })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one thought by id
  getThoughtById({ params }, res) {
    Thought.findOne({
      _id: params.id,
    })
      .populate({
        path: "reactions",
        select: "-__v",
      })

      .select("-__v")
      .sort({
        _id: -1,
      })
      .then((dbThoughtData) => {
        // If no thought is found, send 404
        if (!dbThoughtData) {
          res.status(404).json({
            message: "No thought found with this id!",
          });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // create thought
  createThought({ body }, res) {
    Thought.create(body)
      .then((dbThoughtData) => {
        return User.findOneAndUpdate(
          {
            _id: body.userId,
          },
          {
            $push: {
              thoughts: dbThoughtData._id,
            },
          },
          {
            new: true,
          }
        );
      })

      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({
            message: "No user is found with this id!",
          });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },

  // update thought by id
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate(
      {
        _id: params.id,
      },
      {
        $set: body,
      },
      {
        runValidators: true,
        new: true,
      }
    )

      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({
            message: "No thought found with this id!",
          });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // delete thought by id
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({
      _id: params.id,
    })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({
            message: "No thought with this id found!",
          });
          return;
        }
        return User.findOneAndUpdate(
          {
            _id: params.id,
          },
          {
            $pull: {
              thoughts: params.id,
            },
          },
          {
            new: true,
          }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({
            message: "No thought with this id was found!",
          });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // create reaction
  createReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      {
        _id: params.thoughtId,
      },
      {
        $push: {
          reactions: body,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    )
      .populate({ path: "reactions", select: "-__v" })
      .select("-__v")
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({
            message: "No reaction found with this id!",
          });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },


  // delete reaction
  deleteReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({
            message: "No reaction found with this id!",
          });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = thoughtController;
