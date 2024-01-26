import React, { useEffect ,  } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import Message from './../../../../components/Message/Message'
import Loader from './../../../../components/Loader/Loader'



const DoughnutComponent = () => {

    const dispatch = useDispatch()
    let history = useHistory()



    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo.isAdmin && !userInfo) {
            history.push('/login')
        } 
    }, [dispatch, history, userInfo])

    return (
        <>
        </>
    )
}

export default DoughnutComponent
