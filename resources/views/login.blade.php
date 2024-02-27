<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex,nofollow"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <!-- @todo Make title configurable -->
    <title>Login</title>
</head>
<body>
    <!-- @todo Inject OID and base API URL properly -->
    <slashid-form
        factors='[{ "method": "email_link" }]'
        oid="@php print env('SLASHID_ORGANIZATION_ID'); @endphp"
        base-api-url="https://api.sandbox.slashid.com"
        token-storage="memory"
        on-success="sidOnSuccess"
        analytics-enabled
    ></slashid-form>

    <script>
        function sidOnSuccess() {
            alert('Success!')
        }
    </script>

    <!-- @todo Add script properly -->
    <script type="module" src="/vendor/slashid/bundled-form/main.js"></script>
</body>
</html>
