module.exports = mongoose => {
  mongoose.set('useFindAndModify', false);
  var schema = mongoose.Schema(
    {
      title : String,
      artist: String,
      gender: String,
      creationDate:Date,
      updateDate:Date,
    });

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Songs = mongoose.model("songs", schema);
  return Songs;
};