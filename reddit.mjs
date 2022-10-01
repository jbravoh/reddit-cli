#! /usr/bin/env node

/* 
    node-fetch - fetch client that we can use to hit the reddit API
    open -open browser with a url
    yargs - allows us to process any flags or argumets to the CLI
*/


// Import packages
import fetch from 'node-fetch'
import open from 'open'
import yargs from 'yargs'

// Parse env vars
const { argv } = yargs(process.argv)

// Fetch api & return json
const res = await fetch('https://reddit.com/.json')
const data = await res.json()

const children = data.data.children
// get random post from reddit api response of all posts on front page
const randomPost = children[Math.floor(Math.random() * children.length + 1)]
const link = `https://reddit.com/${randomPost.data.permalink}`


//  log if --print flag is past
if (argv.print) {
    console.log(`
        title: ${randomPost.data.title}
        link: ${link}
    `)
} else {
    open(link)
}





