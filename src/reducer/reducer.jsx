const reducer = (state, action) => {
  if(action.type === 'ADD_EMPLOYEE'){
  return{...state, employees: [action.payload,...state.employees]
  }
  }
  if(action.type === 'ADD_FOLDER'){
    return{...state, folders: [action.payload,...state.folders]
    }
    }
  if(action.type === 'SETUP_MEETING'){
    return{...state, meetings: [action.payload,...state.meetings]
    }
    }
  if(action.type === 'ASSIGN_TASK'){
    return{...state, task: [action.payload,...state.task]
    }
    }
  if (action.type === 'REMOVE') {
    return {
      ...state,
      task: state.task.filter((task) => task.id !== action.payload),
    }
  }
  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, employees: action.payload, loading: false }
  }
  if (action.type === 'DISPLAY_ITEM') {
    return { ...state, task: action.payload, loading: false }
  }
  
}

export default reducer
