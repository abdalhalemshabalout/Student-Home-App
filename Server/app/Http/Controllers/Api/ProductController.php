<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\User;

class ProductController extends ApiController
{
    //Add Product
    public function AddProduct(Request $request)
    {
        try{
           $user = User::where('id','=',$request->user()->id)
           ->select('id')->get();
           $userId =$user[0]['id'];
        $add_product = Product::create([
            'user_id'=>$userId,
            'group_id'=>$request->groupId,
            'name'=> $request->name,
            'amount'=> $request->amount,
            'price'=> $request->price
        ]);
        $message = 'add prodcut successflluy';
        return $this->sendResponse(new ProductResource($add_product),$message);
       }catch(\Exception $e){
        $message = 'Something went wrong.';
        return $this->sendError($message);
       }
    } 
}
