import { db } from "../firebaseconfig";
const initialData = {
  list: [],
};

const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      db.collection("todos").add({
        id: id,
        todo: data,
      });

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_TODO":
      // const newList = state.list.filter((elem) => elem.id !== action.id);
      db.collection("todos").doc(id).delete();
    // return {
    //   ...state,
    //   list: newList,
    // };

    default:
      return state;
  }
};

export default todoReducer;