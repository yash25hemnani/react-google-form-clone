import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteQuestion, updateQuestionTitle, updateQuestionType } from '../redux/formSlice';
import { Select } from 'antd';
import Add from './Add';
import ShortAnswer from './QType/ShortAnswer';
import Paragraph from './QType/Paragraph';
import Delete from './Delete';

const data = [
    {
        title: "Short Answer",
        file: <ShortAnswer />,
    },
    {
        title: "Paragraph",
        file: <Paragraph />,
    },
]

function Questions({id, value, type, addQuestion, handleDelete, isActiveQuestion, onClick }) {
    console.log(id)
    const [typeOfQuestion, setTypeOfQuestion] = useState(type)
    const [questionValue, setQuestionValue] = useState(value)

    const activeQuestionId = useSelector((state) => state.activeQuestionId)
    console.log(activeQuestionId)

    const dispatch = useDispatch()

    const handleChange = (newTitle) => {
        setQuestionValue(newTitle)
        dispatch(updateQuestionTitle({id, newTitle}))
    }

    const handleTypeChange = (value) => {
        setTypeOfQuestion(value);
        dispatch(updateQuestionType({id, value}))
    }

    const handleQuestionDelete = (id) => {
        dispatch(deleteQuestion(id))
    }

    const qType = data.find((elem) => elem.title === type); 

  return (
    <div className='flex md:flex-row flex-col justify-center items-center w-full max-w-3xl mx-auto gap-10'>
        <div className={`rounded-md my-6 ${activeQuestionId == id
            ? "border-l-4 border-blue-500"
            : "border border-gray-300"
        } bg-white max-w-2xl shadow w-full grid place-items-center lg:place-items-start lg:ml-10`} onClick={onClick}>

            <div className='w-full md:px-6 px-2 flex md:flex-row flex-col md:justify-between justify-center items-center gap-8 py-6'>
                <input
                    type='text'
                    value={questionValue}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder='Question'
                    required
                    className='text-base px-4 outline-none capitalize border-b bg-gray-100 focus:border-b-2 border-gray-400 pt-3 pb-2 w-full focus:border-blue-500'
                />

                <Select 
                    placeholder="Select Question Type"
                    style={{width:300}}
                    onChange={(value) => handleTypeChange(value)}
                    value={typeOfQuestion}
                    options={[
                        {value: "Short Answer", label: "Short Answer"},
                        {value: "Paragraph", label: "Paragraph"},
                    ]}
                />           
            </div>
            {qType && <div className='w-full'>{qType.file}</div>}
            {isActiveQuestion && (<Delete onClick={() => handleQuestionDelete(id)} />)}
        </div>
            

    </div>
  )
}

export default Questions