import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Add from './Add'
import { useDispatch, useSelector } from 'react-redux'
import { setTitle, setDesc, addQuestion, deleteQuestion, setActiveQuestionId } from '../redux/formSlice'
import Questions from './Questions'
import saveForm from '../api/routes'

function Form() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const title = useSelector((state) => state.title)
    const desc = useSelector((state) => state.desc)
    const questions = useSelector((state) => state.questions)
    
    const activeQuestionId = useSelector((state) => 
        state.activeQuestionId
    )
    
    const [loading, setLoading] = useState(false)

    const titleHandler = (e) => {
        dispatch(setTitle(e.target.value))
    }

    const descHandler = (e) => {
        dispatch(setDesc(e.target.value))
    }

    const handleAddQuestion = () => {
        dispatch(addQuestion());
    }

    const handleDeleteQuestion = (id) => {
        dispatch(deleteQuestion(id));
    }

    const handleQuestionClick = (id) => {
        dispatch(setActiveQuestionId(id))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const formData = {title, desc, questions}
            const response = await saveForm(formData);

            if (response) {
                navigate('/formlist')
            }
        } catch (error) {
            console.log("Error duing submissions :: handleSubmit :: ", error)
        } finally {
            setLoading(false)
        }
    }

  return (
      <div>
        <Navbar />
        <div className='bg-black/10 w-full grid mx-auto min-h-screen py-10'>
            <form onSubmit={handleSubmit}
            className='w-full block mx-auto h-full px-6 md:px-0 overflow-x-hidden'
            >
                <div className='flex md:flex-row flex-col justify-center items-center max-w-3xl mx-auto'>
                    <div className='border-t-8 rounded-md my-6 border-blue-500 bg-white max-w-2xl shadow w-full grid place-items-center mx-auto'>
                        
                        {/* Creating the first input fields */}
                        <div className='w-full border border-gray-300'>
                            {/* Form Title Field */}
                            <div className='w-full px-6 py-2'>
                                <input
                                type='text'
                                required
                                placeholder='Untitled Form'
                                // Handling
                                onInput={titleHandler}
                                value={title ?? ""}
                                className='text-3xl outline-none font-bold capitalize border-b focus:border-b-2 border-gray-200 pt-3 pb-2 w-full focus:border-blue-500'
                                />
                            </div>
                            
                            {/* Form Description Field */}
                            <div className='w-full px-6 py-2'>
                                <input
                                type='text'
                                required
                                placeholder='Form Description'
                                // Handling
                                onInput={descHandler}
                                value={desc ?? ""}
                                className='text-base outline-none font-medium capitalize border-b focus:border-b-2 border-gray-200 pt-3 pb-2 w-full focus:border-blue-500'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                {questions.map((elem) => (
                    <Questions 
                        onClick = {() => handleQuestionClick(elem.id)} // This is passed and you have to utilize it as well
                        value={elem.title}
                        id={elem.id}
                        key={elem.id}
                        type={elem.type}
                        addQuestion={handleAddQuestion}
                        handleDelete={() => handleDeleteQuestion(elem.id)}
                        isActiveQuestion={elem.id == activeQuestionId}
                    />
                ))}

            <div>
                {questions.length > 0 && (
                <div className="grid place-items-center w-auto mx-auto">
                    <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded"
                    >
                    {loading ? "Processing" : "Save Form"}
                    </button>
                </div>
                )}
            </div>
            </form>

            <div>
                <Add 
                    handleAdd={handleAddQuestion}
                />
            </div>
        </div>
      </div>
  )
}

export default Form