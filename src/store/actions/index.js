import firebase from "firebase";
export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: firebase.firestore.FieldValue.serverTimestamp(),
      data: data,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};
