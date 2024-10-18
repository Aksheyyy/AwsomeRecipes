import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllRecipes } from '../Redux/recipeSlice'

const Home = ({searchTerm}) => {
  const dispatch = useDispatch()
  const {allRecipies,loading,error} = useSelector((state)=>state.recipeReducer)


  useEffect(()=>{
      dispatch(fetchAllRecipes())
  },[dispatch])

  if(loading) return <p>Loading..</p>
  if(error) return <p>{error}</p>

  const navigateToNextPage = ()=>{
    if(CurrentPage!=totalPages){
      setCurrentPage(CurrentPage+1)
    }
  }

  const navigateToPreviousPage = ()=>{
    if(CurrentPage!=1){
      setCurrentPage(CurrentPage-1)
    }
  }

  const filteredRecipes = allRecipies.filter(recipe =>
    recipe.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <>
    <div className='w-100 d-flex flex-wrap mx-auto justify-content-center align-items-center gap-3'>
      {filteredRecipes.map((recipe)=>(
      <div key={recipe.id} 
          className='border shadow p-2 mt-4 d-flex flex-column justify-content-between' 
          style={{ width: '220px', height: '300px' }}>
        <div>
         <img className='' 
              style={{ height: '180px', width: '200px', objectFit: 'cover' }} 
              src={recipe.image} 
              alt={recipe.name} />
         <h5 className='text-truncate'>{recipe.name}</h5> 
        </div>
       <div>
         <Link to={`/view/${recipe.id}`} className='btn btn-outline-info mt-auto'>View Recipe</Link> 
       </div>
     </div>
      ))}
    </div>
  </>
  )
}

export default Home