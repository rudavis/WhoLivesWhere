
//<fb:profile-pic uid= size="square" facebook-logo="true"></fb:profile-pic><fb:name uid=></fb:name>
//<td><a href='http://www.facebook.com/"+response[i].uid+"' target='_blank'>"+response[i].name+"</a></td>
function buildNameCell(u){
    return "<td><a href='http://www.facebook.com/"+u.uid+"' target='_blank'><img src='"+ u.pic_square+ "'>&nbsp;&nbsp;" +u.name+"</a></td>";
    //return "<td><p><fb:profile-pic uid='" + u.uid + "' size='square' facebook-logo='true'></fb:profile-pic>&nbsp;&nbsp;<fb:name uid='" + u.uid + "'></fb:name></p></td>";
}

//<td>"+  response[i].current_location.name +"</td>
function buildLocationCell(u) {
    return "<td>" + u.current_location.name + "</td>";
}

//<td><button onClick=sendMessage("+ response[i].uid +") type='button' class='btn btn-default btn-sm'><span class='glyphicon glyphicon-envelope'></span>&nbsp;&nbsp;Send Message</button></td>
function buildSendMessageCell(u) {
    return "<td><button onClick=sendMessage("+ u.uid +") type='button' class='btn btn-default btn-sm'><span class='glyphicon glyphicon-envelope'></span>&nbsp;&nbsp;Send Message</button></td>";
}

function buildRow(u) {
    return "<tr>" + buildNameCell(u) + buildLocationCell(u) + buildSendMessageCell(u) + "</tr>";
}

//Testing stuff
// Me uid = 6204365;
// Jason = 2248458;
/*
var a = {uid:2248458,current_location: {name:"Philadelphia"}, pic_square : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/t5.0-1/195548_1403289_5925109_q.jpg", name: "TestingA"};
var b = {uid:6204365,current_location: {name:"Philadelphia"}, pic_square : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/t5.0-1/195548_1403289_5925109_q.jpg", name: "TestingB"};
var u = new Array();
u[0] = a;
u[1] = b;
$('#results tbody').append(buildRow(u[0]));
$('#results tbody').append(buildRow(u[1]));
FB.XFBML.parse();
*/