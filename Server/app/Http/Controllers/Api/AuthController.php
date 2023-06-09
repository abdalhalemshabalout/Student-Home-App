<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends ApiController
{
    /****Register Function*****/
    public function register(Request $request)
    {
        $messages = [
            'email.required' => 'Email field cannot be left blank.',
            'email.unique' => 'There is a record of the e-mail you entered..',
            'name.required' => 'Name field cannot be left blank.',
            'name.min' => 'Name cannot be less than 3 characters.',
            'surname.required' => 'Surname field cannot be left blank.',
            'password.required' => 'Please enter your password.',
            'c_password.required' => 'Please re-enter password.',
            'c_password.same' => 'Password repeat does not match.',
            'password.min' => 'Password cannot be less than 6 characters.',
        ];
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3',
            'surname' => 'required',
            'email' => 'required|email|unique:users',
            'telephone' => 'required|numeric',
            'password' => 'required|min:6',
            'c_password' => 'required|same:password',

        ], $messages);
        if ($validator->fails()) {
            return $this->sendError('validation error.', $validator->errors());
        }
        
        $user = User::create([
            'name' => $request->name,
            'surname' => $request->surname,
            'user_name' => $request->userName,
            'address' => $request->address,
            'telephone' => $request->telephone,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'city_id' =>$request->cityId,
            'gender' => $request->gender,
        ]);
        $user['token'] = $user->createToken('user')->plainTextToken;
        $message = 'Created Successfully';
        return $this->sendResponse(new UserResource($user), $message);
    }

      /****LogIn Function*****/
    public function login(Request $request)
    {        
        $validator = Validator::make($request->all(), [
             'email' => 'required|email',
             'password' => 'required|min:6',
        ]);
        if ($validator->fails()) {
            return $this->sendError('Please check your e-mail and password.');
        }
            if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $auth = Auth::user();
            $auth['token'] = $auth->createToken('UserAuth', ['user'])->plainTextToken;
          
            $message = 'Login successful';
            return $this->sendResponse(new UserResource($auth), $message);
        } else {
            return $this->sendError('Login failed.');
        }
    }
    /****Logout Function*****/
    public function logOut(Request $request){
        try{
            $request->user()->tokens()->delete();
            return response()->json(['status'=>'true','message'=>"Checked Out",'data'=>[]]);
        } catch(\Exception $e){
            return response()->json(['status'=>'false','message'=>$e->getMessage(),'data'=>[]],500);
        }
    }
}
