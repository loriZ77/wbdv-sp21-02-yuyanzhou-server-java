(function () {
    var $usernameFld, $passwordFld;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $createBtn, $editBtn, $updateBtn, $removeBtn;
    var $userRowTemplate, tbody;
    var users
    var userService


    function main() {
        $usernameFld = $("#usernameFld")
        $passwordFld = $("#passwordFld")
        $firstNameFld = $("#firstNameFld")
        $lastNameFld = $("#lastNameFld")
        $roleFld = $("#roleFld")

        $createBtn = jQuery(".wbdv-create")
        $editBtn = jQuery(".wbdv-edit")
        $updateBtn = jQuery(".wbdv-update")
        $removeBtn = jQuery(".wbdv-remove")

        tbody = jQuery(".wbdv-tbody")

        userService = new AdminUserServiceClient()
        users = []

        $updateBtn.click(updateUser)
        $createBtn.click(createUser)


        userService.findAllUsers()
            .then(function (actualUsersFromSever) {
                users = actualUsersFromSever
                renderUsers(users)
            })
    }

    function createUser() {
        var newUser = {
            username: $usernameFld.val(),
            password: $passwordFld.val(),
            firstName: $firstNameFld.val(),
            lastName: $lastNameFld.val(),
            role: $roleFld.val()
        }
        userService
            .createUser(newUser)
            .then(function (actualUser) {
                users.push(actualUser)
                renderUsers(users)
            })
    }

    var selectedUser = null
    function selectUser(event) {
        var selectBtn = jQuery(event.target)
        var theId = selectBtn.attr("id")
        console.log(theId)
        selectedUser = users.find(user => user._id === theId)
        console.log(selectedUser)
        $usernameFld.val(selectedUser.username)
        $passwordFld.val(selectedUser.password)
        $firstNameFld.val(selectedUser.firstName)
        $lastNameFld.val(selectedUser.lastName)
        $roleFld.val(selectedUser.role)
    }
    function updateUser() {
        console.log(selectedUser)
        console.log($usernameFld.val())
        console.log($passwordFld.val())
        selectedUser.username = $usernameFld.val()
        selectedUser.password = $passwordFld.val()
        selectedUser.firstName = $firstNameFld.val()
        selectedUser.lastName = $lastNameFld.val()
        selectedUser.role = $roleFld.val()
        userService.updateUser(selectedUser._id, selectedUser)
            .then(status => {
                var index = users.findIndex(user => user._id === selectedUser._id)
                users[index] = selectedUser
                renderUsers(users)
            })
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
        tbody.empty()
        for (var i = 0; i < users.length; i++) {
            var user = users[i]
            tbody
                .prepend(`
                <tr>
                    <td>${user.username}</td>
                     <td>&nbsp;</td>
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
        $usernameFld.val("")
        $passwordFld.val("")
        $firstNameFld.val("")
        $lastNameFld.val("")
        $roleFld.val("FACULTY")
        jQuery(".wbdv-remove").click(deleteUser)
        jQuery(".wbdv-edit").click(selectUser)

    }

    $(main);
})();
