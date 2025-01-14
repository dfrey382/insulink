@extends('layouts.auth')

@section('content')
<div class="container">
    <div class="row justify-content-center my-5">
        <div class="col-sm-4">
            <div class="text-center">
                <a href="/">
                    <img src="{{asset('images/logo.png')}}" alt="{{ config('app.name', 'Laravel') }}" style="height: 100px">
                </a>
            </div>
        </div>
    </div>
    <div class="row justify-content-center">
    
        <div class="col-md-5">
            <div class="card">
    
                <div class="card-body p-5">
                    <h4 class="my-3" style="
            color: #048ABF;
            font-size: 1.8rem;
            font-weight: 700 !important;
            font-family: 'Roboto', sans-serif !important;
        ">{{ __('Reset Password') }}</h4>
                    <hr class="my-3">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form method="POST" action="{{ route('password.email') }}">
                        @csrf

                        <div class="form-group ">
                            <label for="email">{{ __('E-Mail Address') }}</label>

                            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email"
                                value="{{ old('email') }}" required autocomplete="email" autofocus>
                            
                            @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>

                        <div class="form-group mb-0">
                            <button type="submit" class="btn btn-block btn-primary">
                                {{ __('Send Password Reset Link') }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
