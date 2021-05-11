function createTable(container,mas){
    let table = '<table><thead><tr><th>ID</th><th>UserName</th><th>Password</th><th>Age</th><th>Group</th></tr></thead><tbody>';
    elem = JSON.parse(mas);
    for(let i=0; i < elem.length;i++)
    {
        table += '<tr><td>'+(i+1)+'</td><td>'+elem[i]['username']+'</td><td>'+elem[i]['password']+'</td><td>'+elem[i]['age']+'</td><td>'+elem[i]['group']+'</td></tr>';
    }
    table += '</tbody></table>';

    document.getElementById(container).innerHTML = table;
}

$(document).ready(function(){
    function getUsers(){
        $.get('/getusers',function(data){
            createTable('table',data)
        })
    }
    getUsers();
})
