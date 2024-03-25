<link rel="stylesheet" href="{{ asset('vendor/slashid/bundled-form/style.css') }}">

<!-- @todo Make the form configurable -->
<slashid-form
    factors='{{ json_encode($factors) }}'
    oid="{{ $organizationId }}"
    base-api-url="{{ $apiUrl }}"
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
