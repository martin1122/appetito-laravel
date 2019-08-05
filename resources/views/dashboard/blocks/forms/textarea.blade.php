<div class="form-group">
    @if(isset($label)) <label for="">{{ $label }}</label> @endif
    <textarea class="form-control @if($className) {{ $className }} @endif"
              @if(isset($placeholder)) placeholder="{{ $placeholder }}" @endif
              name="{{ $name }}" id="{{ $id }}"
              @if(isset($rows)) rows="{{ $rows }}" @endif
              @if(isset($require) && $required) required @endif
    >@if(isset($value)) {{$value}} @endif</textarea>
</div>
