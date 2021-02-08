(function () {
    var $usernameFld, $passwordFld;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $createBtn, $editBtn, $removeBtn;
    var $userRowTemplate, $tbody;
    var users
    var userService

    jQuery(main);


    function main() {
        $usernameFld = $("#usernameFld")
        $passwordFld = $("#passwordFld")
        $firstNameFld = $("#firstNameFld")
        $lastNameFld = $("#lastNameFld")
        $roleFld = $("#roleFld")

        $createBtn = jQuery(".wbdv-create")
        $editBtn = jQuery(".wbdv-update")
        $removeBtn = jQuery(".wbdv-remove")

        userService = new AdminUserServiceClient()

        users = []

        $createBtn.click(() => {
            createUser({
                username: $usernameFld.val(),
                password: $passwordFld.val(),
                firstName: $firstNameFld.val(),
                lastName: $lastNameFld.val(),
                role: $roleFld.val()
            })
        })
        $editBtn.click(updateUser)
        $tbody = jQuery(".wbdv-tbody")

        userService.findAllUsers()
            .then(function (actualUserFromSever) {
                users = actualUserFromSever
                renderUsers(users)
            })



    }

    function createUser(user) {
        userService
            .createUser(user)
            .then(function (actualUser) {
                users.push(actualUser)
                renderUsers(users)
            })
    }

    function updateUser() {

    }

    function deleteUser(event) {
        var deleteBtn = jQuery(event.target)
        var theClass = deleteBtn.attr("class")
        var theIndex = deleteBtn.attr("id")
        var theId = users[theIndex]._id
        console.log(theIndex)
        userService.deleteUser(theId)
            .then(function (status) {
                users.splice(theIndex, 1)
                renderUsers(users)
            })

    }

    function renderUsers(users) {
        $tbody.empty()
        console.log(users)
        for (var i = 0; i < users.length; i++) {
            var user = users[i]
            $tbody
                .prepend(`
                <tr>
                    <td>${user.username}</td>
                     <td>${""}</td>
                    <td>${user.firstName}</td>
                    <td>${user.lastName}</td>
                    <td>${user.role}</td>
                    <td>
                        <i id="${i}" class="fa-2x fa fa-times wbdv-remove"></i>
                        <i id="${user._id}" class="fa-2x fa fa-pencil wbdv-edit"></i>
                    </td>
                </tr>
                   
            `)
        }
        jQuery(".wbdv-remove").click(deleteUser)
        jQuery(".wbdv-edit").click(updateUser)

    }
})();
