@if ($useBundled)
    <link rel="stylesheet" href="{{ asset('vendor/slashid/bundled-form/style.css') }}">
@endif

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

@if ($useGlue)
    <script src="{{ asset('vendor/slashid/slashid.laravel-web-login.js') }}"></script>
@endif

@if ($useBundled)
    <script type="module" src="{{ asset('vendor/slashid/bundled-form/main.js') }}"></script>
@endif
