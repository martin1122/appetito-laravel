<div class="form-group @if(isset($mainClass)) {{$mainClass}} @endif">
    @if(isset($label)) <label class="@if(isset($labelClass)) {{$labelClass}} @endif" @if(isset($id)) for="{{$id}}" @endif >{{$label}}</label> @endif
    <select class="form-control @if(isset($inputClass)) {{$inputClass}} @endif"
            @if(isset($id)) id="{{$id}}" @endif
            @if(isset($name)) name="{{$name}}" @endif
            @if(isset($required) && $required) required @endif
            @if(isset($disabled) && $disabled) disabled @endif
    >
        @foreach($options as $option)
            <option value="{{$option['value']}}" @if($option['selected']) selected @endif>{{$option['text']}}</option>
        @endforeach
    </select>
</div>
