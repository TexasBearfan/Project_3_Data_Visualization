
const url='https://developer.nps.gov/api/v1/parks?parkCode=acad/alerts'
full_url=url+'&api_key='+api_key
console.log(full_url)
d3.json(full_url).then(function(data){
    console.log(data)
})