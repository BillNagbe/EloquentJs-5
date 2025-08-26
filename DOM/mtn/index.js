  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

const moutainWrapper = document.getElementById('mountains');
const table = document.createElement('table');

function buildATable(data) {
    
    let headerRow = document.createElement('tr');
    let headers = Object.keys(data[0]);
    for(let header of headers) {
        let th = document.createElement('th');
        th.innerHTML = header;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);
    //


    data.forEach(element => {
         let row = document.createElement('tr');
         let td1 = document.createElement('td');
         let td2 = document.createElement('td');
         let td3 = document.createElement('td');
         td1.innerHTML = element.name;
         td2.innerHTML = element.height;
         td3.innerHTML = element.place;
         row.appendChild(td1);
         row.appendChild(td2);
         row.appendChild(td3);
         table.appendChild(row);
         if(element.height) {
            td2.style.textAlign = 'right';
         }
    });

    moutainWrapper.appendChild(table);
}


buildATable(MOUNTAINS);