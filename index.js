require('dotenv').config()
const express = require('express'); 

const GitHub = {
    "login": "solo-leveling",
    "id": 55937571,
    "node_id": "MDQ6VXNlcjU1OTM3NTcx",
    "avatar_url": "https://avatars.githubusercontent.com/u/55937571?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/solo-leveling",
    "html_url": "https://github.com/solo-leveling",
    "followers_url": "https://api.github.com/users/solo-leveling/followers",
    "following_url": "https://api.github.com/users/solo-leveling/following{/other_user}",
    "gists_url": "https://api.github.com/users/solo-leveling/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/solo-leveling/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/solo-leveling/subscriptions",
    "organizations_url": "https://api.github.com/users/solo-leveling/orgs",
    "repos_url": "https://api.github.com/users/solo-leveling/repos",
    "events_url": "https://api.github.com/users/solo-leveling/events{/privacy}",
    "received_events_url": "https://api.github.com/users/solo-leveling/received_events",
    "type": "User",
    "site_admin": false,
    "name": "solo",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 0,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2019-09-29T04:32:35Z",
    "updated_at": "2022-02-08T06:53:49Z"
  }; 
const app = express() ;

app.get('/' , (req , res)=>{
    res.send("Hello world")
})

app.get("/signup", (req , res)=>{
    res.send("<h1>Welcome to our Site</h1>")
})
app.get('/youtube',(req , res)=>{
    res.send("<h1>Youtube</h1>")
})

app.get('/github', (req, res)=>{
    res.json(GitHub)
})
app.listen(process.env.PORT, ()=>{
    console.log(`Expample app listening on port ${process.env.PORT}`)
})