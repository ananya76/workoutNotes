import React, { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutContext';
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForms from '../components/WorkoutForms';
import { useAuthContext } from "../hooks/useAuthContext"

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()
    const {user} = useAuthContext()

    useEffect(() =>{
        const fetchWorkouts = async() => {
            const response = await fetch("https://workoutnotesmern.onrender.com/api/workouts", {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            })
            const json = await response.json()
            // console.log(json)
            // setWorkouts(json )
            if(response.ok){
                dispatch({type: "SET_WORKOUTS", payload: json})
            }
        }

        if(user){
            fetchWorkouts()
        }
    },[dispatch, user])

  return (
    <div className='home'>
        <div className='workouts'>
            {workouts && workouts.map((workout)=>(
                <WorkoutDetails
                key = {workout._id}
                workout = {workout}
                />
            ))}
        </div>
        <WorkoutForms></WorkoutForms>
    </div>
  )
}

export default Home