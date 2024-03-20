
const url='https://developer.nps.gov/api/v1/parks?stateCode='

let street=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
let markers=L.markerClusterGroup();
let circles=[];
function markersize(deaths){
    return deaths*1000000;
}


Coordinate_array=[]
name_array=[]
for(let x=0;x<state.length;x++){
state_url=url+state[x]+'&api_key='+api_key
d3.json(state_url).then(function(item){
    
    data=item.data
    
    for(let i=0;i<data.length;i++){
        row=data[i]
        park_status=parks.includes(row.fullName)

        
        if(park_status==true){
            for(let m=0;m<parks.length;m++){
                if(parks[m]==row.fullName){
                    death_count=count_array[m]
                    
                }
            }
            lat=row.latitude
            long=row.longitude
            markers.addLayer(L.marker([lat,long]).bindPopup(row.name+" "+death_count));
            circles.push(L.circle([lat,long],{
                stroke:false,
                fillOpacity:0.75,
                color:'white',
                fillColor:'red',
                radius:markersize(death_count)
            }))
        }
    }
    
});
}
console.log(circles)
let circle_group=L.layerGroup(circles);
let baseMaps={
    'Cluster Map':markers,
    'Circle':circle_group
}
let overlayMaps={
    
}
let myMap = L.map("map", {
    center: [30.7, -100.5],
    zoom: 3,
    layers:[street,markers]
  });
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
