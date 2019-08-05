<fieldset class="form-group mT-10 mB-10">
    <span>{{ $label }}</span>
    @foreach($options as $option)
        <div class="form-check @if(isset($option['disabled']) && $option['disabled']) disabled @endif">
            <label class="form-check-label">
                <input class="form-check-input @if(isset($class)) {{ $class }} @endif" type="radio"
                       name="@if(isset($name)) {{ $name }} @endif"
                       id="{{ $option['id'] }}"
                       value="{{ $option['value'] }}"
                       @if(isset($option['checked']) && $option['checked']) checked @endif
                       @if(isset($option['disabled']) && $option['disabled']) disabled @endif
                >
                {{ $option['title'] }}
            </label>
        </div>
    @endforeach
</fieldset>
