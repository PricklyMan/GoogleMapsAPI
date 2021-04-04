

let heatmap,map;
let labelIndex = 0;
var tower = [];
const image = "tower.png"
let i=0;
var n=38 //ЧИСЛО БАШЕН
//ЗАДАЕМ РАМКИ ТЕПЛОВОЙ КАРТЫ
 var startx= 82.787762
var endx= 83.081077
var starty= 55.120507
var endy=  54.946153

function initMap() {
    const nsk = {
        lat: 55.015777,
        lng: 82.946991
    }; //координаты нск
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: nsk,

    });

    heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });
    
        function built() { //Построение башен
            
        tower[0] = new google.maps.Marker({
            position: {
                lat: 55.015777,
                lng: 82.846991
            },
            map,
            icon: image,
        });

          tower[1] = new google.maps.Marker({position: { lat: 55.02030416544837, lng: 82.95832065087892},map,icon: image,});
  tower[2] = new google.maps.Marker({position: { lat:
55.01498961469445, lng: 82.9737701748047},map,icon: image,});
  tower[3] = new google.maps.Marker({position: { lat:
55.022469150826566, lng: 82.98750308496095},map,icon: image,});
  tower[4] = new google.maps.Marker({position: { lat:
55.003176979542246, lng: 82.9650669408977},map,icon: image,});
  tower[5] = new google.maps.Marker({position: { lat:
55.008000892524805, lng: 82.93914607297778},map,icon: image,});
  tower[6] = new google.maps.Marker({position: { lat:
55.0180406466247, lng: 82.91889003049731},map,icon: image,});
  tower[7] = new google.maps.Marker({position: { lat:
55.026503584310795, lng: 82.92970469724536},map,icon: image,});
  tower[8] = new google.maps.Marker({position: { lat:
55.02788110274131, lng: 82.90481379758715},map,icon: image,});
  tower[9] = new google.maps.Marker({position: { lat:
55.03607265099833, lng: 82.95094567922526},map,icon: image,});
  tower[10] = new google.maps.Marker({position: { lat:
55.04748222106075, lng: 82.9694851079362},map,icon: image,});
  tower[11] = new google.maps.Marker({position: { lat:
55.05141580206356, lng: 82.94407922414713},map,icon: image,});
  tower[12] = new google.maps.Marker({position: { lat:
54.992371506331786, lng: 82.91421014455729},map,icon: image,});
  tower[13] = new google.maps.Marker({position: { lat:
54.99936685751169, lng: 82.98572212100215},map,icon: image,});
  tower[14] = new google.maps.Marker({position: { lat:
55.03263337253918, lng: 82.97113090396114},map,icon: image,});
  tower[15] = new google.maps.Marker({position: { lat:
55.04355215506083, lng: 82.98709541201778},map,icon: image,});
  tower[16] = new google.maps.Marker({position: { lat:
55.03587980792231, lng: 83.0016866290588},map,icon: image,});
  tower[17] = new google.maps.Marker({position: { lat:
55.03942107380873, lng: 83.02486091494747},map,icon: image,});
  tower[18] = new google.maps.Marker({position: { lat:
55.06017053334945, lng: 82.98383384585567},map,icon: image,});
  tower[19] = new google.maps.Marker({position: { lat:
55.04333068255897, lng: 82.92402502966715},map,icon: image,});
  tower[20] = new google.maps.Marker({position: { lat:
54.99797739358753, lng: 82.8686520368613},map,icon: image,});
  tower[21] = new google.maps.Marker({position: { lat:
54.989902378580084, lng: 82.851485899166},map,icon: image,});
  tower[22] = new google.maps.Marker({position: { lat:
54.98281078165257, lng: 82.8408428937949},map,icon: image,});
  tower[23] = new google.maps.Marker({position: { lat:
54.98399280148207, lng: 82.8628155500449},map,icon: image,});
  tower[24] = new google.maps.Marker({position: { lat:
54.97650608807283, lng: 82.85526244945896},map,icon: image,});
  tower[25] = new google.maps.Marker({position: { lat:
54.966653022242525, lng: 82.86727874584568},map,icon: image,});
  tower[26] = new google.maps.Marker({position: { lat:
54.95916307542018, lng: 82.88650482006443},map,icon: image,});
  tower[27] = new google.maps.Marker({position: { lat:
54.97532384780593, lng: 82.89474456615818},map,icon: image,});
  tower[28] = new google.maps.Marker({position: { lat:
54.9698062663151, lng: 82.90985076733006},map,icon: image,});
  tower[29] = new google.maps.Marker({position: { lat:
54.95916307542018, lng: 82.91294067211521},map,icon: image,});
  tower[30] = new google.maps.Marker({position: { lat:
54.98182573854122, lng: 82.92478530712498},map,icon: image,});
  tower[31] = new google.maps.Marker({position: { lat:
54.95896595269892, lng: 82.9368016035117},map,icon: image,});
  tower[32] = new google.maps.Marker({position: { lat:
55.074925793315266, lng: 82.9337698384062},map,icon: image,});
  tower[33] = new google.maps.Marker({position: { lat:
54.993666302638665, lng: 82.88709020807593},map,icon: image,});
  tower[34] = new google.maps.Marker({position: { lat:
55.077677109810644, lng: 82.96948766901343},map,icon: image,});
  tower[35] = new google.maps.Marker({position: { lat:
54.92944709512644, lng: 82.91885122318627},map,icon: image,});
  tower[36] = new google.maps.Marker({position: { lat:
54.948971886335826, lng: 82.81310781498314},map,icon: image,});
  tower[37] = new google.maps.Marker({position: { lat:
55.00754563763122, lng: 83.03696525539858},map,icon: image,});
           
      var ch=[];
            ch[1]=new google.maps.LatLng(12, 13);
console.log(ch[1].lng());
        
    } //построение башен

   
    
   
var points= [];

    
//ФУНКЦИЯ РАСПРЕДЕЛЕНИЯ ТОЧЕК И ПОСТРОЕНИЯ ТЕПЛОВОЙ КАРТЫ
    function getPoints() {
  var point= [];
        built() //СТРОИМ БАШНИ 
     
for (let y=starty,k=1,a,b,i=0,p=0;y>endy;i++){
    for(let x=startx,sr=0,j=0;x<endx;j++,p++){
         point.push(new google.maps.LatLng(y, x));
         
          for(let z=0,s,ab;z<n;z++){ //ищем среднее расстояние до всех башен
            a=tower[z].getPosition().lat();
            b=tower[z].getPosition().lng();
            ab= new google.maps.LatLng(a, b);
                       
              s=google.maps.geometry.spherical.computeDistanceBetween(point[p],ab);
              sr+=s;
        }
       sr=sr/n;
        k=1+sr*0.0001
          //console.log(point[1].lng());
        step=0.0018*k*0.1;
         x=x+step;
        
    }
    
    y=y-step/3;
}
return (point);
      
  
}
     
}


function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}
    function changeGradient() {
  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
  
  ];
  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
} 

function changeRadius() {
  heatmap.set("radius", heatmap.get("radius") ? null : 1.5);
}

function changeOpacity() {
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.3);
}



    
    

   





