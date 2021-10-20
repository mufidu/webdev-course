const fetch = require('node-fetch')

// fetch("https://api.github.com/users/mufidu")
//     .then(res => {
    //         return res.json()
    //     })
    //     .then(res => {
        //         fetch(res.repos_url)
        //             .then(res => {
            //                 return res.json()
            //             })
            //             .then(res => {
                //                 res.forEach(repo => {
                    //                     console.log(repo.name)
                    //                 });
                    //             })
                    //     })
                    
const { default: axios } = require('axios')
const test = async () => {
    const mantap = await axios.get('https://api.github.com/users/mufidu')
    const repos = await axios.get(mantap.data.repos_url)
    repos.data.forEach(element => {
        console.log(element.name)
    });
}
test()
// const express = require('express')
// const app = express()

// app.get('/git', (req, res) => {
//     res.send(fetch("https://api.github.com/users/mufidu")
//     .then(res => {
//         return res.json()
//     })
//     .then(res => {
//         fetch(res.repos_url)
//             .then(res => {
//                 return res.json()
//             })
//     }))
// })

// app.listen(1000, () => {
//     console.log("it worked")
// })
    