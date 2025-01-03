const mongoose = require('mongoose');

(async function () {
  try {
    // connection
    await mongoose.connect('mongodb://localhost:27017/chat');
    console.log('Connection to MongoDb Ok');

    // model
    const taskSchema = new mongoose.Schema({ body: String });
    const Task = mongoose.model('Task', taskSchema);

    // CRUD
    // C - INSERT - insertOne/Many - create (save) /insertMany
    const newTask = { body: 'Go for a walk' };
    const createdTask = await Task.create(newTask);
    console.log(createdTask);

    // R - SELECT - find - find...
    const foundTasks = await Task.find();
    // console.log(foundTasks);

    const foundTask = await Task.findById('6726318c3ea2584fdc1d2dcc');
    // console.log(foundTask);

    // U - UPDATE - updateOne/Many - updateOne/Many / find...
    const updatedTask = await Task.findByIdAndUpdate(
      '6726318c3ea2584fdc1d2dcc',
      { body: 'Watch TV Show' },
      { new: true } // if true, return the modified document rather than the original
    );

    // console.log('updatedTask :>> ', updatedTask);

    // D - DELETE - deleteOne/Many - deleteOne/Many / find...
    const deletedTask = await Task.findByIdAndDelete(
      '6726318c3ea2584fdc1d2dcc'
    );

    console.log(deletedTask);
  } catch (error) {
    console.log('err :>> ', error);
  }
})();
