import { useEffect, useState } from "react"
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { SRepo } from "./style"


export const Repo = () => {
    const [repositories, setRepositories] = useState([])
    const [like, setLike] = useState(false)
    
    
    useEffect(() => {
        fetch('https://api.github.com/repositories')
            .then(res => res.json())
            .then(res => setRepositories(res))
    })

    const handleClick =(ev)=>{
        ev.preventDefault()
    }

    return (
        <div>
            {repositories.map(({ name, url, description }) => (
                <SRepo>
                    <form >
                        <h2>Repositories</h2>
                        <ul>
                            <li><span>Name</span>: {name}</li>
                            <li><span>Description:</span> {description}</li>
                            <li><span>Url:</span> <Link to={url} >{url}</Link></li>
                        </ul>
                        <button onClick={handleClick} like='false'>Like</button>
                    </form>
                </SRepo>
            ))}
        </div>
    )
}