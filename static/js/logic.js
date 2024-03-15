
const url='https://developer.nps.gov/api/v1/parks?stateCode='
let myMap = L.map("map", {
    center: [30.7, -100.5],
    zoom: 4
  });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
let markers=L.markerClusterGroup();
state=['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']


Coordinate_array=[]
count=0
for(let x=0;x<state.length;x++){
state_url=url+state[x]+'&api_key='+api_key
d3.json(state_url).then(function(item){
    data=item.data
    for(let i=0;i<data.length;i++){
        row=data[i]
        lat=row.latitude
        long=row.longitude
        markers.addLayer(L.marker([lat,long]).bindPopup(row.name));
        count+=1
    }
});
}
myMap.addLayer(markers);
console.log(count)
