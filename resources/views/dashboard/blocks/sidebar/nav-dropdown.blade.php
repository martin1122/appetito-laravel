<li class="nav-item dropdown">
    <a class="dropdown-toggle" href="javascript:void(0);">
                <span class="icon-holder">
                  <i class="{{ $color }} {{ $icon }}"></i>
                </span>
        <span class="title">{{ $name }}</span>
        <span class="arrow">
                  <i class="ti-angle-right"></i>
                </span>
    </a>
    <ul class="dropdown-menu">
        <?php $i = 0; ?>

        @foreach(array_get($children, 'names') as $child)
            <li>
                <a class='sidebar-link' href="{{ array_get($children, 'links')[$i++] }}">{{ $child }}</a>
            </li>
        @endforeach

        @if(isset($grandchildren))
                <li class="nav-item dropdown">
                    <a href="javascript:void(0);">
                        <span>{{ array_get($grandchildren, 'parentName') }}</span>
                        <span class="arrow">
                      <i class="ti-angle-right"></i>
                    </span>
                    </a>
                    <?php $i = 0; ?>
                    <ul class="dropdown-menu">
                        @foreach(array_get($grandchildren,'names') as $item)
                            <li>
                                <a href="{{ array_get($grandchildren, 'links')[$i++] }}">{{ $item }}</a>
                            </li>
                        @endforeach
                    </ul>
                </li>
        @endif
    </ul>
</li>
