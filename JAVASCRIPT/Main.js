// var degree = ['SSC',' HSC', 'B.Sc'];
// var inst=["Willes Little Flower School & College","Siddheswary Girls College","Brac University"];
// var text=document.getElementById('text');
// var table='<table><thread><tr><th>Degree</th><th>Subject&Institute></th></tr></thread><table>';
// table+='<tbody></table>'
// for (var i;degree.length;++i){
//     table += '<tr><td>' + (i + 1) + '</td><td>' + degree[i] + '</td><td>'+inst[i]+'</td></tr>';
// }
// table+='</tbody></table>';
// text.innerHTML=table;
let sortDirection=false;
let personData=[
    { Degree: 'SSC', Subject: 'Science', Institution:'Willies',Year:'2014'},{
        Degree: 'HSC', Subject: 'Science', Institution: 'Willies College', Year: '2016'},{
        Degree: 'B.SC', Subject: 'Computer Science', Institution: 'Brac University', Year: 'On Going'}];
window.onload=()=>{
    loadTableData(personData);
};
function loadTableData(personData){
    const tableBody = document.getElementById('tableData');
    let dataHtml ='';
    for (let person of personData){
        dataHtml += '<tr><td>' + person.Degree + '</td><td>' + person.Subject + '</td><td>' + person.Institution + '</td><td>' +person.Year+'</td></tr>';
    }
    console.log(dataHtml);
    tableBody.innerHTML=dataHtml;
}
