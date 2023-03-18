<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends ApiController
{
    //Get To Profile
    public function profile(Request $request)
    {
        $user = User::where('users.id','=',$request->user()->id)
        ->join('cities','users.city_id','cities.id')
        ->select('users.id','users.name','users.surname',
        'users.user_name as userName','cities.city',
        'users.address','users.telephone','users.email','users.password','users.gender')->get();
        $message='profile';
        return $this->sendResponse($user,$message);

    }
}
