@if ($useBundled)
    <link rel="stylesheet" href="{{ asset('vendor/slashid/bundled-form/style.css') }}">
@endif

<slashid-form
    @foreach ($configuration as $attributeName => $attributeValue)
        @if (is_int($attributeName))
            {{ $attributeValue }}
        @else
            {{ $attributeName }}="{{ $attributeValue }}"
        @endif
    @endforeach
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
