<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Wishlist extends Model
{
    use HasFactory;

    public function product()
    {
        return $this->belongsTo(Product::class, "product_id", "id");
    }
    public function users()
    {
        return $this->belongsTo(User::class, "id", "user_id");
    }
}
