<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index():array
    {
        return[
            'success' => true,
            'message' => "Bienvenu à PAgroAli",
            'data' => [
                'service' => 'PAgroAli',
                'version' => '0',
                'support' => 'example@lacatholille.fr'
            ]
        ];
    }
}
