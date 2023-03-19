<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\GroupUserResource;
use Illuminate\Http\Request;
use App\Models\GroupUser;
class AdminGroupController extends ApiController
{
    //Add User To Group
    public function addUserToGroup(Request $request)
    {
        try{
            $add_user_to_group = GroupUser::create([
                'user_id'=>$request->userId,
                'group_id'=>$request->groupId,
            ]);
            $message='added successfuly';
            return $this->sendResponse(new GroupUserResource($add_user_to_group),$message);
        }catch(\Exception $e){
            $message = "Something went wrong.";
            return $this->sendError($message);
        }
    }
    //Delete Announcement
    // public function DeleteUserFromGroup($id){
    //     try {
    //         $user_find = GroupUser::find($id);
    //         $delete_user = $user_find->delete();
    //         $message = "User Deleted.";
    //         return $this->sendResponse($delete_user, $message);
    //     }catch (\Exception $e) {
    //             $message = "Something went wrong.";
    //             return $this->sendError($message);
    //     }
    // }
   
}
