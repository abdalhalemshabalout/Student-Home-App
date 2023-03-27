<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

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
    //Update User Information
    public function updateUserInfo(Request $request ,$id){
        $messages = [
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
            'email' => 'required',
            'telephone' => 'required|numeric',
            'password' => 'required|min:6',
            'c_password' => 'required|same:password',

        ], $messages);
        if ($validator->fails()) {
            return $this->sendError('validation error.', $validator->errors());
        }

        try {
            $update_user_info = User::where('id', $id)->update([
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
            $message = 'Updated successfully.';
            return $this->sendResponse($update_user_info, $message);
        } catch (\Exception $e) {
            $message = 'User information could not be updated.';
            return $this->sendError($message);
        }
    }
}
