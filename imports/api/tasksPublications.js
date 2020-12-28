import { Meteor } from "meteor/meteor";
import { TasksCollection } from "/imports/db/TasksCollection";

// As you are using this inside this function you should not use arrow function
Meteor.publish("tasks", function publishTasks() {
  return TasksCollection.find({ userId: this.userId });
});
