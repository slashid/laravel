<div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" value="" required />
</div>
<div class="mb-3">
    <button class="btn btn-success" id="go-login">Web session login</button>
</div>

<script src="https://cdn.slashid.com/slashid.js"></script>
<script>
    // @todo Move Javascript to a file
    // @todo Properly add OID as an environment variable
    const MY_OID = "@php print $GLOBALS['slashid_oid']; @endphp";
    const sid = new slashid.SlashID({
        baseURL: "https://api.sandbox.slashid.com",
        oid: MY_OID,
    });
    const emailField = document.getElementById("email");
    const loginButton = document.getElementById("go-login");

    loginButton.addEventListener("click", () => {
        loginButton.disabled = true;
        emailField.disabled = true;

        sid.id(
                MY_OID, {
                    type: "email_address",
                    value: emailField.value,
                }, {
                    method: "email_link",
                }
            )
            .then(user => {
                // Do the login.
                fetch("/login/callback", {
                        method: "POST",
                        cache: "no-cache",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/x-www-form-urlencoded",
                            "X-CSRF-Token": "@php print csrf_token(); @endphp",
                        },
                        body: "token=" + user._token
                    })
                    .then(async (response) => {
                        const jsonResponse = await response.json();
                        if (jsonResponse.success) {
                            document.location = jsonResponse.redirect;
                        }
                        else {
                            alert('Login failed!');
                        }
                    });
            })
    });
</script>
