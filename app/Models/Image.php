<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    // Tiny dimensions
    public const TINY_WIDTH = 75;
    public const TINY_HEIGHT = 50;

    // Medium dimensions
    public const MEDIUM_WIDTH = 300;
    public const MEDIUM_HEIGHT = 200;

    protected $fillable = [
        'original',
        'webp',
        'medium',
        'tiny',
        'expire',
    ];
}
