(function () {
    var $usernameFld, $passwordFld;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $createBtn, $editBtn, $removeBtn;
    var $userRowTemplate, $tbody;
    var users
    var userService


    function main() {
        $usernameFld = $("#usernameFld")
        $passwordFld = $("#passwordFld")
        $firstNameFld = $("#firstNameFld")
        $lastNameFld = $("#lastNameFld")
        $roleFld = $("#roleFld")

        $createBtn = jQuery(".wbdv-create")
        $editBtn = jQuery(".wbdv-update")
        $removeBtn = jQuery(".wbdv-remove")

        $createBtn.click(createUser)
        $editBtn.click(updateUser)

        $tbody = jQuery("#wbdv-tbody")

        userService = new AdminUserServiceClient()

        users = [
            // {username: "", password: "", firstName: "", lastName: "", role: ""}
        ]
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

    function updateUser() {

    }

    function deleteUser() {

    }

    function renderUsers(users) {
        $tbody.empty()
        for(var i=0; i<users.length; i++) {
            var user = users[i]
            $tbody
                .prepend(`
                <tr>
                    <td>${users.username}</td>
                    <td>${users.password}</td>
                    <td>${users.firstName}</td>
                    <td>${users.lastName}</td>
                    <td>${users.role}</td>
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

    $(main);
})();
