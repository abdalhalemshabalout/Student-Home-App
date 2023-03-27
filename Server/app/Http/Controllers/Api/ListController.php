<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Group;

class ListController extends ApiController
{
    //List All Users
    public function getUsers()
    {
        $users = User::select('id','user_name as userName')->get();
        $message='users';
        return $this->sendResponse($users,$message);
    }
    //List Group Admins
    public function getGroupAdmins(Request $request)
    {
        $users = Group::where('groups.id','=',$request->input('groupId'))
        ->join('group_admins','groups.id','group_admins.group_id')
        ->join('users','group_admins.user_id','users.id')
        ->select('groups.id as groupId ','groups.name as groupName','users.user_name as AdminName')->get();
        $message='Group users';
        return $this->sendResponse($users,$message);
    }
    //List Group Users
    public function getGroupUsers(Request $request)
    {
        $users = Group::where('groups.id','=',$request->input('groupId'))
        ->join('group_users','groups.id','group_users.group_id')
        ->join('users','group_users.user_id','users.id')
        ->select('groups.id as groupId','groups.name as groupName','users.user_name as userName')->get();
        $message='Group users';
        return $this->sendResponse($users,$message);
    }
    //List My Groups 
    public function myAdminGroups(Request $request)
    {
        $user = User::where('users.id','=',$request->user()->id)
        ->join('group_admins','users.id','group_admins.user_id')
        ->join('groups','group_admins.group_id','groups.id')
        ->select('groups.id as groupId','groups.name as groupName')
        ->get();
        $message='your groups';
        return $this->sendResponse($user,$message);
    }
    //List My Groups 
    public function myUserGroups(Request $request)
    {
        $user = User::where('users.id','=',$request->user()->id)
        ->rightjoin('group_users','users.id','group_admins.user_id')
        ->leftjoin('groups','group_users.group_id','groups.id')
        ->select('groups.id as groupId','groups.name as groupName')
        ->get();
        $message='your groups';
        return $this->sendResponse($user,$message);
    }
    public function mygroups(Request $request)
    {
        $this->myAdminGroups($request);
        // $this->myUserGroups($request);
    }
    
}
