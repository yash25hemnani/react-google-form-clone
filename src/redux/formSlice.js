import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    title: "Untitled Form",
    desc: "", 
    questions: [],
    activeQuestionId: null
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload
        },
        setDesc: (state, action) => {
            state.desc = action.payload
        },
        addQuestion: (state) => {
            const newQuestion = {
                id: nanoid(), 
                title: '',
                type: 'Short Answer',
            };

            return {
                ...state,
                questions: [...state.questions, newQuestion],
                activeQuestionId: newQuestion.id,
            }
        },
        deleteQuestion: (state, action) => {
            const del_id = action.payload;  
            state.questions = state.questions.filter((element) => element.id != del_id)
        },
        updateQuestionTitle: (state, action) => {
            const {id, newTitle} = action.payload
            console.log(id, newTitle)
            state.questions = state.questions.map((question) => {
                if(question.id == id){
                    return {...question, title: newTitle}
                }
                return question;
            })
        },
        updateQuestionType: (state, action) => {
            const {id, value} = action.payload
            console.log(value)
            state.questions = state.questions.map((question) => {
                if(question.id == id){
                    return {...question, type: value}
                }
                return question;
            })
            console.log(state.questions)
        },
        setActiveQuestionId: (state, action) => {
            console.log(action)
            state.activeQuestionId = action.payload
        }
    }, 
})

export const {setTitle, setDesc, addQuestion, deleteQuestion, updateQuestionTitle, updateQuestionType, setActiveQuestionId} = formSlice.actions;

export default formSlice.reducer;