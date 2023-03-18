<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return
        [
            'name'=>$this->name,
            'surname' => $this->surname,   
            'userName' => $this->user_name, 
            'address'=>$this->address,
            'telephone' => $this->telephone,   
            'email' => $this->email,
            'password' => $this->password,
            'cityId' => $this->city_id,   
            'gender' => $this->gender,                        
        ];
    }
}
