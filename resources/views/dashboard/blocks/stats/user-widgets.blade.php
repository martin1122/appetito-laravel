<div class="masonry-item  w-100">
    <div class="row gap-20">
        <!-- #Total Users ==================== -->
        <div class='col-md-3'>
            <div class="layers bd bgc-white p-20">
                <div class="layer w-100 mB-10">
                    <h6 class="lh-1">Total Users</h6>
                </div>
                <div class="layer w-100">
                    <div class="peers ai-sb fxw-nw">
                        <div class="peer peer-greed">
                            <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-blue-50 c-blue-500">{{ array_get($users, 'total') }}</span>
                        </div>
                        <div class="peer">
                            <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">{{ array_get($users, 'active') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- #Member Profiles ==================== -->
        <div class='col-md-3'>
            <div class="layers bd bgc-white p-20">
                <div class="layer w-100 mB-10">
                    <h6 class="lh-1">Member Profiles</h6>
                </div>
                <div class="layer w-100">
                    <div class="peers ai-sb fxw-nw">
                        <div class="peer peer-greed">
                            <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-blue-50 c-blue-500">{{ array_get($users, 'members.total') }}</span>
                        </div>
                        <div class="peer">
                            <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">{{ array_get($users, 'members.active') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- #Business Profiles ==================== -->
        <div class='col-md-3'>
            <div class="layers bd bgc-white p-20">
                <div class="layer w-100 mB-10">
                    <h6 class="lh-1">Business Profiles</h6>
                </div>
                <div class="layer w-100">
                    <div class="peers ai-sb fxw-nw">
                        <div class="peer peer-greed">
                            <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-blue-50 c-blue-500">{{ array_get($users, 'businesses.total') }}</span>
                        </div>
                        <div class="peer">
                            <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">{{ array_get($users, 'businesses.active') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- #Moderators ==================== -->
        <div class='col-md-3'>
            <div class="layers bd bgc-white p-20">
                <div class="layer w-100 mB-10">
                    <h6 class="lh-1">Moderators</h6>
                </div>
                <div class="layer w-100">
                    <div class="peers ai-sb fxw-nw">
                        <div class="peer peer-greed">
                            <span id="sparklinedash4"></span>
                        </div>
                        <div class="peer">
                            <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-blue-50 c-blue-500">{{ array_get($users, 'moderators.total') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
