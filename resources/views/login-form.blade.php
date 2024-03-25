<link rel="stylesheet" href="{{ asset('vendor/slashid/bundled-form/style.css') }}">

<!-- @todo Inject OID and base API URL properly -->
<!-- @todo Make the form configurable -->
<!-- @todo Break the template down in parts -->
<slashid-form
    factors='[{ "method": "webauthn" }, { "method": "email_link" }]'
    oid="{{ $organizationId }}"
    base-api-url="https://api.sandbox.slashid.com"
    token-storage="memory"
    on-success="slashIdLoginSuccessCallback"
    analytics-enabled
></slashid-form>

<script>
    SlashIdSettings = {
        loginCallbackUrl: "{{ $loginCallbackUrl }}",
        csfrToken: "{{ $csrfToken }}"
    };
</script>

<script src="{{ asset('vendor/slashid/slashid.laravel-web-login.js') }}"></script>
<script type="module" src="{{ asset('vendor/slashid/bundled-form/main.js') }}"></script>
