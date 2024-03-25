
const url='https://developer.nps.gov/api/v1/parks?stateCode='

let street=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
let markers=L.markerClusterGroup();
let circle_group=L.layerGroup();

function markersize(deaths){
    return deaths*950;
}
function determineColor(deaths){
    if(deaths<10){
        color='green'
    }
    else if(deaths<20){
        color='yellow'
    }
    else if(deaths<100){
        color='orange'
    }
    else{
        color='red'
    }
    return color;
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
            if(!name_array.includes(row.fullName)){
            for(let m=0;m<parks.length;m++){
                if(parks[m]==row.fullName){
                    death_count=count_array[m]
                    console.log(death_count)
                    name_array.push(row.fullName)
                }
            }
            lat=row.latitude
            long=row.longitude
            markers.addLayer(L.marker([lat,long]).bindPopup(row.name+" "+death_count));
            circle_group.addLayer(L.circle([lat,long],{
                stroke:false,
                fillOpacity:0.75,
                fillColor:determineColor(death_count),
                color:'black',
                radius:markersize(death_count)
            }).bindPopup('<h1>'+row.name+"</h1> <hr> <h3>Death Toll: "+death_count+'</h3>'));
        }
    }}
    
});
}

let baseMaps={
    'Cluster Map':markers,
    'Circle':circle_group
}
let overlayMaps={
    
}
let myMap = L.map("map", {
    center: [30.7, -100.5],
    zoom: 4,
    layers:[street,markers]
  });
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
