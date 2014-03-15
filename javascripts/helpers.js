// Function to take user input and make it camel case
//Apparently the FQL is case sensitive.  
function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}


/**  Build the Name Cell **/
/*  Sample 
    <td>
        <a href="http://www.facebook.com/1403289" target="_blank">
            <img src="https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/t5.0-1/195548_1403289_5925109_q.jpg">
            &nbsp;&nbsp;Nita Saetie Taylor
        </a>
    </td>
*/
function buildNameCell(u){
    return "<td><a href='http://www.facebook.com/"+u.uid+"' target='_blank'><img src='"+ u.pic_square+ "'>&nbsp;&nbsp;" +u.name+"</a></td>";
}

/** Build the Location Cell */
/* Sample
    <td>Philadelphia, Pennsylvania</td>
*/
function buildLocationCell(u) {
    return "<td>" + u.current_location.name + "</td>";
}

/** Build the Send message cell */
/* Sample
    <td>
        <button onclick="sendMessage(1403289)" type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-envelope"></span>&nbsp;&nbsp;Send Message</button>
    </td>
*/
function buildSendMessageCell(u) {
    return "<td><button onClick=sendMessage("+ u.uid +") type='button' class='btn btn-default btn-sm'><span class='glyphicon glyphicon-envelope'></span>&nbsp;&nbsp;Send Message</button></td>";
}

/* Putting it all together */
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