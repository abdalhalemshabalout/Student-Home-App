<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\GroupResource;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Group;
use App\Models\GroupAdmin;

class GroupController extends ApiController
{
    //Create Group
    public function createGroup(Request $request)
    {
        $create_group = Group::create([
            'name' =>$request->name 
        ]);
        // take group id from created
        $group_id = Group::find($create_group->id);
        // take user id from request
        $user = User::where('id','=',$request->user()->id)
        ->select('id')->get();
        $userId =$user[0]['id'];
        // create group admin
        GroupAdmin::create([
            'group_id'=>$group_id->id,
            'user_id'=>$userId
        ]);
        $message='Created Successfuly';
        return $this->sendResponse(new GroupResource($create_group),$message);
    }
}
