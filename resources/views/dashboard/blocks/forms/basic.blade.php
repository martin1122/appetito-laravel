<div class="form-group @if(isset($mainClass)) {{$mainClass}} @endif">
    @if(isset($label)) <label class="@if(isset($labelClass)) {{$labelClass}} @endif" @if(isset($id)) for="{{$id}}" @endif >{{$label}}</label> @endif
    <input type="{{ $type }}" class="@if(isset($inputClass)) {{$inputClass}} @endif"
           @if(isset($id)) id="{{$id}}" @endif
           @if(isset($placeholder)) placeholder="{{$placeholder}}" @endif
           @if(isset($name)) name="{{$name}}" @endif
           @if(isset($value)) value = "{{$value}}" @endif
           @if(isset($required) && $required) required @endif
           @if(isset($disabled) && $disabled) disabled @endif
           @if(isset($postLabel)) aria-describedby="{{$postLabelId}}" @endif
           @if(isset($step)) step="{{$step}}" @endif
    >
        @if(isset($postLabel)) <small id="{{ $postLabelId }}" class="form-text text-muted">{{ $postLabel }}</small> @endif
</div>
