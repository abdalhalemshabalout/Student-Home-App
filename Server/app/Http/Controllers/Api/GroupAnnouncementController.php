<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\GroupAnnouncementResource;
use Illuminate\Http\Request;
use App\Models\GroupAnnouncement;
class GroupAnnouncementController extends ApiController
{
     //Add Announcement
     public function AddAnnouncement(Request $request)
     {
         try{
         $add_announcement = GroupAnnouncement::create([
             'user_id'=>$request->userId,
             'group_id'=>$request->groupId,
             'description'=> $request->description
         ]);
         $message = 'add Announcement successfully';
         return $this->sendResponse(new GroupAnnouncementResource($add_announcement),$message);
        }catch(\Exception $e){
         $message = 'Something went wrong.';
         return $this->sendError($e->getMessage());       
     }
     }

            //delete announcement
        public function deleteAnnouncement(Request  $request, $id){
            
            try{
            $announcement_find=GroupAnnouncement::find($id);
            $delete_announcement=$announcement_find->delete();
            $message="Announcement deleted.";
            return $this->sendResponse($delete_announcement,$message);
            }catch(\Exception $e){
                $message="Something went wrong.";
                return $this->sendError($message);
            }
        }
}
