const route = require("express").Router()
const currentDate = new Date();
const currentUtcTime = currentDate.toLocaleDateString('en-US', {weekday: "long"});
const githubFileUrl = "";
const githubRepoUrl = "";
const statusCode = 200

route.get('/check', (req, res)=>{
    console.log("app is working perfectly")
    res.send("Route is working")
})

route.get("/", (req, res)=>{
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