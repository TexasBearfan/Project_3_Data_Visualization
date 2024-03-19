
const url='https://developer.nps.gov/api/v1/parks?stateCode='
let myMap = L.map("map", {
    center: [30.7, -100.5],
    zoom: 4
  });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
let markers=L.markerClusterGroup();



Coordinate_array=[]
name_array=[]
for(let x=0;x<state.length;x++){
state_url=url+state[x]+'&api_key='+api_key
d3.json(state_url).then(function(item){
    
    data=item.data
    console.log(data)
    for(let i=0;i<data.length;i++){
        row=data[i]
        park_status=parks.includes(row.fullName)

        console.log(park_status)
        if(park_status==true){
            console.log(row)
            
            lat=row.latitude
            long=row.longitude
            markers.addLayer(L.marker([lat,long]).bindPopup(row.name));
        }
    }
});
}
myMap.addLayer(markers);




