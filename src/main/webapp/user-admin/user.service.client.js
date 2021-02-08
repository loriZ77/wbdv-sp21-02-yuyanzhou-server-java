function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/001033108/users';
    var self = this;
    function createUser(user) {
        return fetch(self.url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json()
        })
    }
    function findAllUsers() {  }
    function findUserById(userId) {  }
    function updateUser(userId, user) {  }
    function deleteUser(userId) { }
}


// alert("Welcome to JavaScript!")
//console.log("Welcome to...")
// var myHeader = jQuery("h1")
// //myHeader.remove()
// myHeader
//     .html("User-Admin Page")
//     .append(" : add/remove users")
//     .prepend("Welcome to ")
//     //.css("color", "white")
//     .click(function(event) {
//         //alert("header is clicked")
//         console.log(event.target)
//         var h1 = jQuery(event.target)
//         h1.css("background-color", "green")
//     })
// var tableRows = jQuery("#table-rows")
//
// var users = [
//     {username: "7788", password: "1122", firstname: "yuyan", lastname: "zhou", role: "student"},
//     {username: "1122", password: "1122", firstname: "yuyan", lastname: "zhou", role: "student"},
//     {username: "5566", password: "1122", firstname: "yuyan", lastname: "zhou", role: "student"},
//     {username: "9966", password: "1122", firstname: "yuyan", lastname: "zhou", role: "student"}
// ]
//
// tableRows.prepend('<tr class="wbdv-template wbdv-user wbdv-hidden">\n' +
//     '                <td class="wbdv-username">prepand</td>\n' +
//     '                <td>&nbsp;</td>\n' +
//     '                <td class="wbdv-first-name">Ada</td>\n' +
//     '                <td class="wbdv-last-name">Lovelace</td>\n' +
//     '                <td class="wbdv-role">FACULTY</td>\n' +
//     '                <td class="wbdv-actions">\n' +
//     '        <span class="pull-right">\n' +
//     '          <i class="fa-2x fa fa-times wbdv-remove"></i>\n' +
//     '          <i class="fa-2x fa fa-pencil wbdv-edit"></i>\n' +
//     '        </span>\n' +
//     '                </td>\n' +
//     '            </tr>')
