<div class="form-group">
    <div class="checkbox checkbox-circle checkbox-info peers ai-c">
        <input
                type="{{ $type }}"
                @if(isset($id)) id="{{$id}}" @endif
                @if(isset($name)) name="{{$name}}" @endif
                class="@if(isset($inputClass)) {{$inputClass}} @endif"
                @if(isset($checked) && $checked) checked @endif
        >
        <label @if(isset($id)) for="{{$id}}" @endif class="@if(isset($labelClass)) {{$labelClass}} @endif">
            <span class="peer peer-greed">@if(isset($label)) {{ $label }} @endif</span>
        </label>
    </div>
</div>
