@extends('dashboard.administrator.master')

@section('content')
    <div class="row gap-20 masonry pos-r">
        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item col-md-6">
            <div class="bgc-white p-20 bd">
                <h6 class="c-grey-900">Basic Form</h6>
                <div class="mT-30">
                    <form>
                        @component('dashboard.blocks.forms.basic',[
                            'labelClass' => 'text-danger',
                            'inputClass' => 'text-danger',
                            'label' => 'Email address2',
                            'id' => 'exampleInputEmail2',
                            'type' => 'email',
                            'placeholder' => 'Enter email2',
                            'name' => 'email',
                            'postLabel' => "We'll never share your email with anyone else.",
                            'postLabelId' => 'emailHelp2'
                        ]) @endcomponent

                        @component('dashboard.blocks.forms.basic',[
                            'label' => 'Birth Date',
                            'id' => 'birthDate',
                            'type' => 'date',
                            'placeholder' => '',
                            'name' => 'birth',
                            'required' => true,
                        ]) @endcomponent

                        @component('dashboard.blocks.forms.select',[
                            'label' => 'Select country',
                            'id' => 'selectCountry',
                            'name' => 'country',
                            'options' => [
                                'Uzbekistan', 'Japan', 'Australia', 'Taipei'
                            ]
                        ]) @endcomponent

                        @component('dashboard.blocks.forms.checkbox',[
                            'inputClass' => 'peer',
                            'labelClass' => 'peers peer-greed js-sb ai-c',
                            'label' => 'Send Email',
                            'id' => 'sendEmail',
                            'type' => 'checkbox',
                            'name' => 'checkboxEmail',
                        ]) @endcomponent

                        @component('dashboard.blocks.forms.submit-button', [
                            'class' => 'btn-primary',
                            'name' => 'save it'
                        ]) @endcomponent

                        @component('dashboard.blocks.forms.radiogroup', [
                            'label' => 'Select one of these:',
                            'class' => '',
                            'name' => 'radioGroup',
                            'options' => [
                                [ 'id' => 'firstOption', 'value' => 'one', 'title' => 'option one', 'checked' => true ],
                                [ 'id' => 'secondOption', 'value' => 'two', 'title' => 'option two' ],
                                [ 'id' => 'thirdOption', 'value' => 'three', 'title' => 'option three', 'disabled' => true ],
                            ]
                        ]) @endcomponent
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
