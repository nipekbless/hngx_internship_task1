const route = require("express").Router()
const currentUtcTime = new Date();
const currentDay = currentUtcTime.toLocaleDateString('en-US', {weekday: "long"});
const githubFileUrl = "https://github.com/nipekbless/hngx_internship_task1/blob/main/index.js";
const githubRepoUrl = "https://github.com/nipekbless/hngx_internship_task1";
const statusCode = 200

route.get('/check', (req, res)=>{
    console.log("app is working perfectly")
    res.send("Route is working")
})

route.get("/api", (req, res)=>{
    const {slack_name, track} = req.query
    res.status(200).json(
        {
            "slack_name" : slack_name,
            "current_day": currentDay,
            "utc_time": currentUtcTime,
            "track": track,
            "github_file_url": githubFileUrl,
            "github_repo_url": githubRepoUrl,
            "status_code": statusCode
        }
    )
    console.log(currentDay)
})

module.exports = route