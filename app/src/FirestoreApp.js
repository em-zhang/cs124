import React, { useState } from "react";
import App from "./App"
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";

// Firebase initialization config provided from lab docs
const firebaseConfig = {
    apiKey: "AIzaSyCd9qqxvMpEKpBzwfWcc2tlRFa6ICaLH_s",
    authDomain: "hmc-cs124-fa21-labs.firebaseapp.com",
    projectId: "hmc-cs124-fa21-labs",
    storageBucket: "hmc-cs124-fa21-labs.appspot.com",
    messagingSenderId: "949410042946",
    appId: "1:949410042946:web:0113b139a7e3cd1cc709db"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function FirestoreApp(props) {
    // FirestoreApp collection
    const collectionName = "em-zhang-tasks-v00"
    const query = db.collection(collectionName);
    const [value, loading, error] = useCollection(query); // You can change the const used here

    // const taskList = value ? value.docs.map(doc => doc.data()) : [];
    let taskList = [];
    if (value) {
        taskList = value.docs.map((doc) => {
            return {...doc.data()}});
    }

    // adds a task, generating new id each time
    function handleAddTask(currTask) {
        const newId = generateUniqueID();
        console.log("adding new task, task ID is ", newId);
        db.collection(collectionName).doc(newId).set({
            id: newId,
            taskLabel: currTask,
            isCompleted: false,
            priority: "",
            dateCreated: firebase.database.ServerValue.TIMESTAMP
        });
        return newId;
    }

    // handles updating any field of a task
    function handleTaskFieldChanged(taskId, field, value) {
        const doc = db.collection(collectionName).doc(taskId);
        doc.update({
            [field]: value,
        })
    }

    // handles task deletion through filtering
    function handleDeleteTask(taskID) {
        console.log("deleting task, task ID is ", taskID);
        db.collection(collectionName).doc(taskID).delete();
    }

    function handleDeleteTasks(taskType) {
        let delete_query = null;
        // delete the item based on the type of task
        if (taskType === "Completed"){
            delete_query = db.collection(collectionName).where('completed','==',true);
        } else if (taskType === "Uncompleted") {
            delete_query = db.collection(collectionName).where('completed','==',false);
        } else if (taskType === "All") {
            delete_query = db.collection(collectionName);
        }

        delete_query.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                doc.ref.delete();
            });
        });
    }

    return <div>
        <App
            taskList={taskList}
            handleDeleteTask={handleDeleteTask}
            handleDeleteTasks={handleDeleteTasks}
            handleAddTask={handleAddTask}
            handleTaskFieldChanged={handleTaskFieldChanged}
        />
    </div>
}

export default FirestoreApp;