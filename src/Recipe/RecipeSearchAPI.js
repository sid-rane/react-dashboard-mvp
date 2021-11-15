import React, { useEffect, useRef, useState } from 'react'

const RecipeSearchAPI = () => {
    const APP_KEY = "becfb0b94074c17bf42526019c2febb9"
    const APP_ID = "c32e64e6"
    const inputRef = useRef(null)
    const [ingredientList, setIngredientList] = useState([])

    const [loding, setLoding] = useState(false)

    const searchHandel = (e) => {
        e.preventDefault()
        searchIngridient(inputRef.current.value)
    }
    const searchIngridient = query => {
        let url = `search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        setLoding(true)
        fetch(url, { mode: "cors" })
            .then(response => {
                return response.json()
            }).then(res => {
                console.log("final response", res.hits)
                setIngredientList(res.hits)
                setLoding(false)
                inputRef.current.value = ""
            })
            .catch(err => {
                console.log("error", err)
            })
    }

    useEffect(() => {
        searchIngridient("mutton")
        setLoding(false)

    }, [])

    return (
        <div className="container-fluid ">
            <div className="m-4 row">
                <div className="col-12">
                    <form action="" className="mb-4">
                        <input

                            ref={inputRef}
                            type="text"
                        />
                        <button onClick={searchHandel}>Search</button>
                    </form>
                    {loding && <p>Loading ....</p>}
                </div>

                {
                    ingredientList.length > 0 ? ingredientList.map((items, i) => {
                        console.log(items)
                        return (
                            <div key={i} className="col-md-3 mb-4">
                                <div className="card" style={{height:'100%'}}>
                                    <img src={items.recipe.image} alt="" className="w-100 mb-2" />
                                    <div className="p-2">
                                        <h6>{items.recipe.label}</h6>
                                        <ul className="pl-4">
                                            {
                                                items.recipe.dietLabels.length > 0 && items.recipe.dietLabels.map((dts, d) => {
                                                    return (
                                                        <li key={d}><small>{dts}</small></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : null
                }
            </div>
        </div>
    )
}

export default RecipeSearchAPI
