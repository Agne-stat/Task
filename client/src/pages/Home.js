import React, {useEffect, useState} from 'react'
import './Home.css'
import Header from '../components/Header'
import axios from 'axios'

const token = localStorage.getItem('testio-login');

axios.interceptors.request.use(
    config => {
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, 
    error => {
        return Promise.reject(error)
    }
)

function Home() {

    const [data, setData] = useState([])
   
    useEffect(() => {
        axios.get('https://playground.tesonet.lt/v1/servers')
        .then((res) => {
            let unsortedData=res.data
            let sortedData = unsortedData.sort((a,b) => a.distance - b.distance)
            setData(sortedData)
        })
    }, [])


    return (
        <>
            <Header></Header>
            <main>
                <div className="home-container">
                    <table>
                        <thead>
                            <tr>
                                <th>SERVER</th>
                                <th>DISTANCE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.distance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}

export default Home
