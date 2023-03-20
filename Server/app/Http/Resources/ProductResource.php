<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'userId'=>$this->user_id,
            'groupId'=>$this->group_id,
            'name'=>$this->name,
            'amount'=>$this->amount,
            'price'=>$this->price
        ];
    }
}
