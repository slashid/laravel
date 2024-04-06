@if (!empty($cssOverride))
    <style type="text/css">
        .sid-theme-root {
            @foreach ($cssOverride as $property => $value)
                {{ $property }}: {{ $value }};
            @endforeach
        }
    </style>
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
